import test from "ava"
import fn from "../es/map.js"

const object = { one: 1, two: 2, three: 3 }
const array = [1, 3, 5, 7]
const string = "foobar"

test("maps over objects", t => {
  const newObject = fn(object, v => v + 1)
  t.deepEqual(newObject, { one: 2, two: 3, three: 4 })
})

test("maps over arrays", t => {
  const newArray = fn(array, v => v * -1)
  t.deepEqual(newArray, [-1, -3, -5, -7])
})

test("mapping a string results in a string", t => {
  const newString = fn(string, v => v + "-")
  t.is(newString, "f-o-o-b-a-r-")
})
