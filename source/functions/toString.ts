/**
 * ```
 * toString :: (as => b) => ...as => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a _Unary_ function that accepts an array as its argument, and returns
 * that accepts any number of arguments instead.
 *
 */
export const toString = <B>(a: unknown) => `${a}`
