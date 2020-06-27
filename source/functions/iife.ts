/**
 * ```
 * iife :: (...as => b, ...as) => b
 * ```
 * -----------------------------------------------------------------------------
 * Immediately Invokes a function, passing in the supplied parameters and
 * returning the result, if any.
 *
 */
export const iife = <F extends Function>(f: F, ...as: unknown[]) => f(...as)
