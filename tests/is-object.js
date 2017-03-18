import test from 'ava'
import fn from '../is-object'

test('reports true only for plain objects', t => {
  t.true(fn({}))
  t.false(fn(1))
  t.false(fn(false))
  t.false(fn(''))
  t.false(fn([]))
  t.false(fn(new Map()))
  t.false(fn(new Set()))
  t.false(fn(new Date()))
  t.false(fn(NaN))
  t.false(fn(null))
  t.false(fn(undefined))
})
