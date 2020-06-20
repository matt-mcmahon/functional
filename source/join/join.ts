interface Joinable<A> {
  join: (separator?: A | undefined) => A;
}

/**
 * ```
 * join:: a => as => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a joining value, a list with the a `join(a:A):B` method, and returns B
 *
 */
export const join = <A>(a: A) => (as: Joinable<A>) => as.join(a);
