import getType from './get-type'
import isPrimitive from './is-primitive'

export default function is (a, b) {
  return isBase(a, b)
}

function isBase (a, b, stack) {
  // eslint-disable-next-line no-self-compare
  if (a === b || (a !== a && b !== b)) return true

  const aType = getType(a)
  const bType = getType(b)

  if (
    aType !== bType ||
    !a || !b ||
    typeof a !== 'object'
  ) {
    return false
  }

  switch (aType) {
    case 'array':
      if (a.length !== b.length) return false
      return isDeep(a, b, stack)
    case 'date':
      return a.valueOf() === b.valueOf()
    case 'promise':
      return a === b
    case 'map':
    case 'set':
      const aEntries = Array.from(a)
      const bEntries = Array.from(b)
      return (
        aEntries.length === bEntries.length &&
        isDeep(aEntries, bEntries, stack)
      )
    default:
      // all non-primitives require deep comparison
      return isDeep(a, b, stack)
  }
}

function isDeep (a, b, stack = new Set()) {
  const aKeys = Object.keys(a)
  const { length } = aKeys
  if (length !== Object.keys(b).length) {
    return false
  }

  let i = -1
  while (++i < length) {
    const key = aKeys[i]

    if (!(key in b)) {
      return false
    }

    const val = a[key]
    if (!isPrimitive(val)) {
      // keep track of objects to handle
      // circular references, assume equal
      if (stack.has(val)) continue
      stack.add(val)

      if (
        isPrimitive(b[key]) ||
        !isDeep(val, b[key], stack)
      ) {
        return false
      }
    }

    if (!isBase(val, b[key], stack)) {
      return false
    }
  }

  return true
}
