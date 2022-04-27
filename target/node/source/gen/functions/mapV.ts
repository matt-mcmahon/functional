/**
 * ```haskell
 * mapV :: (a => b) => (...as) => b[]
 * ```
 * -----------------------------------------------------------------------------
 *
 * Variadic form of map. Takes a mapping function, __ab__, any number of arguments of type __a__, and returns a list of __b__s.
 */
export const mapV = <A, B>(ab: (a: A) => B) => (...as: A[]): B[] => as.map(ab);
