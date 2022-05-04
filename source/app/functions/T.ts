/**
 * ```haskell
 * T :: * => true
 * ```
 * -----------------------------------------------------------------------------
 *
 * __T__ ignores any arguments passed to it and returns `true`.
 */
export const T = (..._: unknown[]): true => true;
