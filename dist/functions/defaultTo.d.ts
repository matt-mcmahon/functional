/**
 * ```
 * defaultTo :: a => b => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * If __b__ is `null`, `undefined`, or `NaN`, return __a__, otherwise return __b__.
 *
 */
export declare const defaultTo: <A>(a: A) => <B>(b: B) => A | B;
