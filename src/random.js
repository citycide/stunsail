import toNumber from './to-number'
import isObject from './is-object'
import isArrayLike from './is-array-like'

export default function random (value, bound) {
  if (isObject(value)) {
    let keys = Object.keys(value)
    let selected = keys[~~(Math.random() * keys.length)]
    return value[selected]
  }

  if (isArrayLike(value)) {
    return value[~~(Math.random() * value.length)]
  }

  if (typeof value !== 'number') {
    value = toNumber(value)
  }

  if (typeof bound === 'undefined') {
    bound = value
    value = 0
  }

  if (value > bound) {
    let temp = value
    value = bound
    bound = temp
  }

  return value + Math.floor(Math.random() * (bound - value + 1))
}
