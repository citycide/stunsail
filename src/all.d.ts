import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types'

/**
 * @description
 * Universal version of native `Array#every` that works on pretty much any
 * iterable - Arrays & Array-likes, Objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * Returns `true` if the result of `fn` is truthy for every item in the
 * collection, or stops iteration early and returns `false` if some item
 * causes `fn` to return a falsy value.
 *
 * `fn` defaults to `value => !!value` so that `collection` can quickly be
 * tested for truthiness throughout.
 *
 * @returns `boolean` &ndash; whether all arguments satisified the condition
 *
 * @example
 * all([1, 3, 5, 7], v => v < 10)
 * // -> true
 *
 * all({ one: 1, two: 2, three: 3 }, v => v === 3)
 * // -> false
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | collection | `object` | Iterable-like object to map over, applying `fn` on each iteration |
 * | fn | `Function` | Callback applied to each item in `collection` |
 *
 * @see any
 */
interface All {
  <T extends string> (collection: T, fn?: StringIterator<boolean>): boolean
  <T> (collection: T[], fn?: ArrayIterator<T, boolean>): boolean
  <K, V> (collection: Map<K, V>, fn?: MapIterator<K, V, boolean>): boolean
  <T> (collection: Set<T>, fn?: SetIterator<T, boolean>): boolean
  <T extends object> (collection: T, fn?: ObjectIterator<T, boolean>): boolean
}

declare const all: All
export default all
