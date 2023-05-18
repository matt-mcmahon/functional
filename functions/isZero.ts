/**
 * ```haskell
 * isZero :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is the number `0`, `false`
 * otherwise.
 */
export const isZero = (x: unknown): x is 0 => x === 0;
