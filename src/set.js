import isObject from './is-object'
import isArrayLike from './is-array-like'
import normalizePath from './lib/_normalize-path'

export default function set (object, path, value) {
  let keys = path

  if (typeof keys === 'string') {
    keys = normalizePath(path).split('.')
  }

  if (!isArrayLike(keys)) keys = [keys]

  let i = -1
  let length = keys.length
  let result = length ? object : undefined

  while (++i < length) {
    if (Object(result) !== result) return object
    let current = keys[i]

    if (i === length - 1) {
      result[current] = value
      continue
    }

    if (!isObject(result[current])) {
      result[current] = {}
    }

    result = result[current]
  }

  return object
}
