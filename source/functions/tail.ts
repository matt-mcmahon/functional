/**
 * ```
 * tail :: as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the portion of an array not including the first element.
 *
 */
export const tail = <A>(as: A[]) => as.slice(1)
