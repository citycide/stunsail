module.exports = ({ dedent: $ }) => {
  return {
    header: 'filter(fn, collection)',
    description: $`
      Universal version of native \`Array#filter\` that
      works on pretty much any iterable - Arrays & Array-likes,
      Objects, Sets, Maps, strings, custom iterables, etc.

      \`fn\` is called with arguments \`value\`, \`key\`, \`collection\`.
      If the result is truthy, the element will be present in the resulting
      collection. If the result is falsy, it will be _filtered_.
    `,
    parameters: [
      ['fn', 'Function', 'Predicate that decides whether to remove the item'],
      ['collection', 'Iterable', 'Iterable-like object from which to filter items']
    ],
    returns: '`any`: same type as `collection`',
    usage: $`
      const object = { one: 1, two: 2, three: 3 }
      const array = [1, 2, 3, 4, 5]

      const filterer = filter(value => value % 2)

      filterer(object)
      // -> { one: 1, three: 3 }

      filterer(array)
      // -> [1, 3, 5]

      filter(value => value !== 'o', 'foobar')
      // -> fbar
    `,
    curried: true
  }
}