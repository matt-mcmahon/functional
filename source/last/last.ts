/**
 * ```
 * last :: as => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the last element in an array.
 *
 */
export const last = <A>(as: A[]) => as[as.length - 1];
