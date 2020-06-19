/**
 * ```
 * toVariadic :: (as => b) => ...as => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a _Unary_ function that accepts an array as its argument, and returns
 * that accepts any number of arguments instead.
 *
 */
export declare function toVariadic<A, B>(f: (as: A[]) => B, ...as: A[]): B;
