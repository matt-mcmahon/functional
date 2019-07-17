/**
 * ```
 * partial :: (a¹, a², …, aⁿ => b) => (a¹, …) => (…, aⁿ) => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a version of the supplied Variadic function that can be
 *
 */
export declare function partial(
  originalFunction: Function,
  ...initialArgs: any[]
): (...remainingArguments: any[]) => any
