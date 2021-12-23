/** @todo: delete eslint pragma */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

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
export const partial =
  <AS extends Args>(...as: AS) =>
  <BS extends Args, C>(f: (...args: [...AS, ...BS]) => C) =>
  (...bs: BS) =>
    f(...as, ...bs)

export type Args = readonly unknown[]
