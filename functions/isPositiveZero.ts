/**
 * ```haskell
 * isPositiveZero :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is the number `+0`, `false`
 * otherwise.
 */
export const isPositiveZero = (a: unknown): a is -0 =>
  a === 0 && (1 / a) === Number.POSITIVE_INFINITY;
