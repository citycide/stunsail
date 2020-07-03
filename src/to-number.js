import getType from "./get-type.js"
import isArrayLike from "./is-array-like.js"

import {
  LEFT_RIGHT_WHITESPACE_REGEX,
  BINARY_REGEX,
  OCTAL_REGEX,
  BAD_HEX_REGEX
} from "./constants.js"

export default function toNumber (value, round) {
  if (!value) return 0

  const inputType = getType(value)

  let rolling = value
  if (typeof rolling === "object") {
    rolling = inputType === "object"
      ? Object.keys(rolling).length
      : getType(rolling.valueOf) === "function"
        ? rolling.valueOf()
        : rolling
  }

  if (typeof rolling !== "string") {
    if (isArrayLike(rolling)) return rolling.length
    rolling = String(rolling)
  }

  rolling = rolling.replace(LEFT_RIGHT_WHITESPACE_REGEX, "")

  const isBinary = BINARY_REGEX.test(rolling)
  if (isBinary || OCTAL_REGEX.test(rolling)) {
    rolling = parseInt(rolling.slice(2), isBinary ? 2 : 8)
  } else {
    if (BAD_HEX_REGEX.test(rolling)) {
      rolling = 0 / 0
    }
  }

  rolling = Number.isNaN(rolling) ? 0 : +rolling
  rolling = Number.isNaN(rolling)
    ? inputType === "string" ? value.length : 0
    : rolling

  return round ? Math.round(rolling) : rolling
}
