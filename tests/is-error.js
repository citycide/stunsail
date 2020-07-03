import test from "ava"
import fn from "../es/is-error.js"

test("correctly identifies errors", t => {
  t.true(fn(new TypeError()))
  t.true(fn(new Error()))
  t.true(fn(new RangeError()))
  t.true(fn(new ReferenceError()))
  t.true(fn(new URIError()))
  t.true(fn(new SyntaxError()))
  t.true(fn(new EvalError()))
})
