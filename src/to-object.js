import reduce from './reduce'
import getType from './get-type'
import isPrimitive from './is-primitive'

export default function toObject (value) {
  if (isPrimitive(value)) return { [value]: value }

  let inputType = getType(value)
  if (inputType === 'object') return value

  if (inputType === 'map' || inputType === 'set') {
    inputType = 'array'
    value = Array.from(value)
  }

  if (inputType !== 'array') return {}

  return reduce(value, (acc, key) => {
    if (Array.isArray(key) && key.length === 2) {
      return Object.assign(acc, { [key[0]]: key[1] })
    }

    return Object.assign(acc, { [key]: key })
  }, {})
}
