/**
 * @description
 * Check whether `value` is `NaN`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isNan(NaN)
 * // -> true
 *
 * isNan(40)
 * // -> false
 *
 * isNan('string')
 * // -> false
 *
 * isNan({})
 * // -> false
 */
interface IsNan {
  (value: unknown): boolean
}

declare const isNan: IsNan
export default isNan
