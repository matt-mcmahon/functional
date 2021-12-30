/**
 * ```haskell
 * isEmpty :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * Predicate that returns `true` if __a__ is an empty value for it's type, `false` otherwise. Empty values are values that have a length property equal to zero, `0`, or objects with no enumerable properties.
 *
 * @example
 * ```
 * isEmpty("") //=> true
 * isEmpty([]) //=> true
 * isEmpty(new Set()) //=> true
 * isEmpty(new Map()) //=> true
 * isEmpty({}) //=> true
 * isEmpty(0)  //=> false
 * ```
 */
export const isEmpty = (a: unknown): boolean =>
  a instanceof Map
    ? a.size === 0
    : a instanceof Set
    ? a.size === 0
    : isCountable(a)
    ? a.length === 0
    : typeof a === "object" && a !== null && Object.keys(a).length === 0

/**
 * An object is countable if it has a non-enumerable length property
 * @param a
 */
function isCountable(a: unknown): a is { length: number } {
  if (a != null) {
    const descriptor = Object.getOwnPropertyDescriptor(a, "length")
    if (descriptor?.enumerable === false) {
      return true
    }
  }
  return false
}
