/**
 * ```haskell
 * isDate :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Predicate that returns `true` if __a__ is a Date object, `false` otherwise.
 *
 */
export const isDate = (a: unknown): a is Date => a instanceof Date
