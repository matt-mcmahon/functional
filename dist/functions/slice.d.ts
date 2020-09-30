/**
 * ```
 * slice->beginning :: n => m => as => as
 * slice->end       ::      m => as => as
 * slice->list      ::           as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns part of an array, __as__, from the beginning index, __n__, up to but
 * not including the _end_ index, __m__.
 *
 * For example:
 *
 * ```
 * const as = [0, 1, 2, 3, 4]
 * slice(1)(4)(as) <=> as.slice(1, 4) <=> [1, 2, 3]
 * ```
 */
export declare const slice: (n?: number | undefined) => (m?: number | undefined) => <A>(as: Iterable<A> | ArrayLike<A>) => A[];
