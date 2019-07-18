/**
 * ```
 * partial :: (a¹, a², …, aⁿ => b) => (a¹, …) => ... => (…, aⁿ) => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a version of the supplied _n_-ary function that can be be partially
 * applied.
 *
 */
export declare function partial<A, B>(
  originalFunction: (...args: A[]) => B,
  ...initial: A[]
): (...remaining: A[]) => B
