/**
 * ```
 * filter :: (a => Boolean) => as => as
 * ```
 * -----------------------------------------------------------------------------
 * Filters a list, keeping only the values for which the __predicate__ returns
 * _true_.
 *
 */
export declare const filter: <A>(p: (a: A) => boolean) => (as: A[]) => A[];
