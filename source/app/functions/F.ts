/**
 * ```haskell
 * F :: * => false
 * ```
 * -----------------------------------------------------------------------------
 *
 * __F__ ignores any arguments passed to it and returns `false`.
 */
export const F = (..._: unknown[]): false => false;
