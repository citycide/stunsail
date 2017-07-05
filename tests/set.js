import test from 'ava'
import fn from '../set'

const object = { key: 'value', nested: { inner: { deep: 'thing' } } }

test('sets the key at path to the given value', t => {
  let res = fn(object, 'nested.inner.deep', 40)
  t.is(object.nested.inner.deep, 40)
  t.is(object, res)
})
