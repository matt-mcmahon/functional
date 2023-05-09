/**
 * ```haskell
 * isTruthy :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns `true` if __a__ is a truthy value, false otherwise.
 */
export const isTruthy = (a: unknown): boolean => !!a;
