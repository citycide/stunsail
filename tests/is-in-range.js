import test from "ava"
import fn from "../es/is-in-range.js"

test("true cases", t => {
  t.true(fn(3, 1, 4))
  t.true(fn(3, 4))
  t.true(fn(-3, -4, 0))
})

test("false cases", t => {
  t.false(fn(3, 1, 3))
  t.false(fn(3, 3))
})
