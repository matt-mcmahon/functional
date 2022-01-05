/**
 * ```haskell
 * ifElse :: (a => Boolean) => (a => b) => (a => c) => (a) => b|c
 * ```
 * -----------------------------------------------------------------------------
 *
 * If the __predicate__ evaluates to true, passes a to the
 *
 */
export const ifElse =
  <A, B, C, D>(
    predicate: (a: A | C) => true | false,
    whenTrue: (a: A) => B,
    whenFalse: (c: C) => D
  ) =>
  (x: A | C): B | D =>
    predicate(x) ? whenTrue(x as A) : whenFalse(x as C)
