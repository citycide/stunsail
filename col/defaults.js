'use strict'

const curry = require('../fn/curry')
const isObject = require('../is/object')
const isIterable = require('../is/iterable')
const isPrimitive = require('../is/primitive')

const isTraversable = v => isIterable(v) || isObject(v)

module.exports = curry(function defaults (object, extension) {
  if (isPrimitive(object)) return object

  return base(object, extension, (obj, ext, key) => {
    if (!(key in obj)) obj[key] = ext[key]
  })
})

function base (object, extension, fn) {
  if (isPrimitive(extension)) return object

  for (let item in extension) {
    if (!{}.hasOwnProperty.call(extension, item)) continue
    if (fn(object, extension, item) === false) break

    if (
      isTraversable(extension[item]) &&
      isTraversable(object[item])
    ) {
      base(object[item], extension[item], fn)
    }
  }

  return object
}
