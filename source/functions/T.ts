/**
 * ```
 * T :: * => true
 * ```
 * -----------------------------------------------------------------------------
 *
 * __T__ ignores any arguments passed to it and returns `true`.
 *
 */
export const T = (...ignored: unknown[]) => true
