/**
 * ```
 * sort :: ((a, a) => n) => as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Sorts a list by applying the given sorting function.
 *
 */
export declare function sort<T>(
  sortingFunction: (a: any, b: any) => number,
  list: T[]
): T[]
