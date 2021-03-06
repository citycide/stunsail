import toNumber from "./to-number.js"

export default function isInRange (value, start, end) {
  start = toNumber(start)
  if (typeof end === "undefined") {
    end = start
    start = 0
  } else {
    end = toNumber(end)
  }

  value = toNumber(value, true)

  return (
    value >= Math.min(start, end) &&
    value < Math.max(start, end)
  )
}
