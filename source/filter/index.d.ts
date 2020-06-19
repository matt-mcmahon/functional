import { Predicate, Iterable, Mappable } from "../types";

/**
 * ```
 * filter :: (a => Boolean) => as => as
 * ```
 * -----------------------------------------------------------------------------
 * Filters a list, keeping only the values for which the __predicate__ returns
 * _true_.
 *
 */
export declare function filter<T>(predicate: Predicate<T>, list: T[]): T[];
