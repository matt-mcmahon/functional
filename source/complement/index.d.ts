import { Predicate } from "../types"

/**
 * ```
 * complement :: (a -> Boolean) -> a -> Boolean
 * ```
 * -----------------------------------------------------------------------------
 * Creates a function that will return the _complement_ of applying a _value_
 * to the given _predicate_. For example:
 * ```
 * const isFunction = f => typeof f === 'function
 * const isNotFunction = complement(f)
 *
 * isFunction('value') => false
 * isNotFunction('value') => true
 * ```
 */
export declare function complement<T>(
  predicate: Predicate<T>
): (value: T) => boolean
