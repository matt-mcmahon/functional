/**
 * ```haskell
 * ifElse :: (a => Boolean) => (a => b) => (a => c) => (a) => b|c
 * ```
 * -----------------------------------------------------------------------------
 *
 * If the __predicate__ evaluates to true, passes a to the
 */
export const ifElse = <A1, A2, B1, B2>(
  predicate: (a: A1 | B1) => boolean,
  whenTrue: (a: A1) => A2,
  whenFalse: (b: B1) => B2,
) =>
  (x: A1 | B1): A2 | B2 =>
    predicate(x) ? whenTrue(x as A1) : whenFalse(x as B1);
