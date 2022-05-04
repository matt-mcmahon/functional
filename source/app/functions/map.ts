export type Mappable<A, B> = { map(ab: (a: A) => B): B[] };

/**
 * ```haskell
 * map :: (a => b) => a[] => b[]
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a mapping function, __ab__, a list of _a_s, and returns a list of _b_s.
 */
export const map = <A, B>(ab: (a: A) => B) =>
  (as: Mappable<A, B>) => as.map(ab);
