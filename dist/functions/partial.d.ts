/**
 * ```
 * partial :: (a¹, …, aᵐ) => ((a¹, …, aⁿ, b¹, …, bⁿ) => c) => (b¹, …, bⁿ) => c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Accepts _m_-number of arguments, **a**. Then accepts a function, **f**, of
 * the form `(a¹, …, aⁿ, b¹, …, bⁿ) => c`. Then accepts the remaining _n_-number
 * of arguments, __b__, and applies them to __f__, as in
 * `f(a¹, …, aⁿ, b¹, …, bⁿ) => c`.
 */
export declare const partial: <AS extends Args>(...as: AS) => <BS extends Args, C>(f: (...args_0: AS, ...args_1: BS) => C) => (...bs: BS) => C;
export declare type Args = readonly unknown[];
