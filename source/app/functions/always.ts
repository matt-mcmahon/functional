/**
 * ```haskell
 * always :: a => * => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a function that always returns __a__, ignoring any arguments, __bs__.
 *
 * @param a - value we want to always return
 * @param bs - any number of arguments we want to ignore
 *
 * @example
 * ```
 * always('a')('b', false) //=> 'a'
 * ```
 */
export const always = <A>(a: A) => (..._bs: unknown[]): A => a;
