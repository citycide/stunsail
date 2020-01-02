/**
 * Retreive the item at the highest index of the given Array-like or `Set` object.
 * For `Set`s this is based on insertion order, ie. the last inserted object.
 */
interface Last {
  <T> (collection: ArrayLike<T> | Set<T>): T | undefined
}

declare const last: Last
export default last
