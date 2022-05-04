/**
 * ```haskell
 * both :: (a => b) => (a => c) => a => b|c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the result of `mapAB(a)` if it is _truthy_, otherwise returns `mapAC(a)`.
 *
 * @param mapAB - function that maps _a_ to _b_
 * @param mapAC - function that maps _a_ to _c_
 * @returns _b_ if _b_ is truthy, _c_ otherwise
 *
 * @example
 * ```js
 * const incIfZero = both((a) => a, (a) => a + 1)
 * incIfZero(0) //=> 1
 * incIfZero(3) //=> 3
 * ```
 */
export const both = <A, B>(mapAB: (a: A) => B) =>
  <C>(mapAC: (a: A) => C) => (a: A): B | C => mapAB(a) && mapAC(a);
