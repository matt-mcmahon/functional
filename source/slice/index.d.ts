import { OrderedList } from "../types"

/**
 * ```
 * slice->begin :: x => y => as => as
 * slice->end   ::      y => as => as
 * slice->list  ::           as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns part of an _Iterable_ object, from the _start_ index up to, but not
 * including, the _end_ index. For example:
 *
 * ```
 * const as = [0, 1, 2, 3, 4]
 * slice(1)(4)(as) <=> as.slice(1, 4) <=> [1, 2, 3]
 * ```
 */
export declare function slice<T>(
  start: number,
  end: number,
  iterable: OrderedList<T>
): OrderedList<T>
