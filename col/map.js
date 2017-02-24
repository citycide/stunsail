'use strict'

const each = require('./each')
const curry2 = require('../fn/curry2')
const isArrayLike = require('../is/array-like')

module.exports = curry2((fn, collection) => {
  let arrayLike = isArrayLike(collection)
  let result = arrayLike ? [] : {}

  let i = -1
  each((v, k, o) => {
    k = arrayLike ? ++i : k
    result[k] = fn(v, k, o)
  }, collection)

  return typeof collection === 'string'
    ? result.join('')
    : result
})
