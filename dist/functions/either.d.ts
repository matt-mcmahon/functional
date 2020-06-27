/**
 * ```
 * either :: (a => b) => (a => c) => a|c
 * ```
 * -----------------------------------------------------------------------------
 *
 * The __either__ combinator creates a _Unary_ from two functions. It returns
 * __b__ from calling `mapAB(a)` if __b__ is truthy. Otherwise, it returns __c__
 * from calling `mapAC(a)`.
 *
 */
export declare const either: <A, B>(mapAB: (a: A) => B) => <C>(mapAC: (a: A) => C) => (a: A) => B | C;
//# sourceMappingURL=either.d.ts.map