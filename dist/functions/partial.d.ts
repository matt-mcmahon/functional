/**
 * ```
 * partial :: (a¹, a², …, aⁿ => b) => (a¹, …) => ... => (…, aⁿ) => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a version of the supplied _n_-ary function that can be be partially
 * applied.
 *
 * @todo add support for Variadic Tuples in TypeScript 4
 */
export declare const partial: <F extends Function>(f: F) => (...as: unknown[]) => any;
