import test from 'ava'
import fn from '../get'

const object = { key: 'value', nested: { inner: { deep: 'thing' } } }

test('returns the value at path if it is defined', t => {
  let res = fn(object, 'key')
  t.is(res, 'value')
})

test('returns deeply nested values', t => {
  let res = fn(object, 'nested.inner.deep')
  t.is(res, 'thing')
})
