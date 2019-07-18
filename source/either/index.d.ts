/**
 * ```
 * either :: (a => b) => (a => c) => a|c
 * ```
 * -----------------------------------------------------------------------------
 *
 * The __either__ combinator creates a _Unary_ from two functions. It returns
 * __b__ form calling `mapAB(a)` if __b__ is truthy. Otherwise it returns __c__
 * from calling `mapAC(a)`.
 *
 */
export declare function either<A, B, C>(
  mapAB: (a: A) => B,
  mapAC: (a: A) => C,
  a: A
): B | C
