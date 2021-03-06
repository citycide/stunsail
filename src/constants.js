export const MAX_SAFE_INTEGER = 9007199254740991
export const NUMERIC_REGEX = /^((?:\d+)?\.?(?:\d+)?)$/
export const LEFT_RIGHT_WHITESPACE_REGEX = /^\s+|\s+$/g
export const LEFT_RIGHT_DOT_REGEX = /^[.]*|[.]*$/g
export const BRACKETED_REGEX = /\[([^[\]]+)\]/g
export const OCTAL_REGEX = /^0o[0-7]+$/i
export const BAD_HEX_REGEX = /^[-+]0x[0-9a-f]+$/i
export const BINARY_REGEX = /^0b[01]+$/i
export const WORD_SEPARATOR_REGEX = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+/
export const UPPERCASE_CHARACTER_REGEX = /[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g
export const LEFT_RIGHT_NONALPHANUM_REGEX = /^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g
export const LOWER_UPPER_PAIR_REGEX = /([a-z])([A-Z])/g
export const NONALPHANUM_OR_UNDERSCORE_REGEX = /[^A-Za-z0-9]+|_+/g
