/**
 * ```
 * sort :: ((a, a) => n) => as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Sorts a list by applying the given sorting function.
 *
 */
export declare function sort<A, B>(
  sortingFunction: (a0: A, a1: A) => number,
  list: A[]
): A[]
