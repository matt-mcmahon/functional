/**
 * ```
 * F :: * => false
 * ```
 * -----------------------------------------------------------------------------
 *
 * __F__ ignores any arguments passed to it and returns `false`.
 *
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const F = (...ignored: unknown[]): false => false
