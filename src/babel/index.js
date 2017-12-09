import kebab from '../kebab-case'
import each from '../each'
import filter from '../filter'

const getNamespaces = list =>
  filter(list, ({ type }) => type === 'ImportSpecifier')

const makeImport = (t, name, options) => {
  const { useRequire, useModules } = options
  const file = kebab(name)
  const es = !useRequire && useModules ? 'es/' : ''
  const path = `stunsail/${es}${file}`

  if (useRequire) {
    return t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier(name),
        t.callExpression(
          t.identifier('require'),
          [t.stringLiteral(path)]
        )
      )
    ])
  }

  return t.importDeclaration(
    [t.importDefaultSpecifier(t.identifier(name))],
    t.stringLiteral(path)
  )
}

export default ({ types: t }) => {
  return {
    visitor: {
      CallExpression (path, state) {
        if (
          !t.isIdentifier(path.node.callee, { name: 'require' }) ||
          !t.isStringLiteral(path.node.arguments[0], { value: 'stunsail' })
        ) return

        const parent = path.parentPath.parentPath
        const options = { useRequire: true, useModules: state.opts.useModules }

        const imports = []
        each(parent.node.declarations, declaration => {
          if (!t.isObjectPattern(declaration.id)) return

          each(declaration.id.properties, property => {
            imports.push(makeImport(t, property.key.name, options))
          })
        })

        if (imports.length) {
          parent.replaceWithMultiple(imports)
        }
      },

      ImportDeclaration (path, state) {
        const { node: { source, specifiers } } = path
        if (source.value !== 'stunsail') return

        const imports = []
        const namespaces = getNamespaces(specifiers)

        each(namespaces, namespace => {
          const { imported, local } = namespace
          const name = imported.name || local.name
          imports.push(makeImport(t, name, state.opts))
        })

        if (imports.length > 0) {
          path.replaceWithMultiple(imports)
        }
      }
    }
  }
}
