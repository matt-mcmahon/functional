/**
 * ```
 * defaultTo :: a => b => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * If __b__ is `null` or `undefined` return __a__, otherwise return __b__.
 *
 */
export declare function defaultTo<A, B>(a: A, b: B): A | B
