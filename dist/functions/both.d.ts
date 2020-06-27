/**
 * ```
 * both :: (a => b) => (a => c) => a => b|c
 * ```
 * -----------------------------------------------------------------------------
 * Returns the result of calling the first Predicate if `mapAB(a) == false`,
 * otherwise returns `mapAC(a)`.
 *
 */
export declare const both: <A, B>(first: (a: A) => B) => <C>(second: (a: A) => C) => (a: A) => B | C;
//# sourceMappingURL=both.d.ts.map