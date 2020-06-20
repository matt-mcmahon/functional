import { sign } from "@mwm/sign";

export const signatures = [
  "complement->predicate :: (a => Boolean) => a => Boolean",
  "complement            ::                   a => Boolean",
];

export const implementation = (predicate) => (value) => !predicate(value);

/**
 * ```
 * complement :: (a => Boolean) => a => Boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a function that will return the _complement_ of applying a _value_
 * to the given _predicate_. For example:
 *
 * ```
 * const isFunction = f => typeof f === 'function
 * const isNotFunction = complement(f)
 *
 * isFunction('value') => false
 * isNotFunction('value') => true
 * ```
 */
export const complement = sign(signatures, implementation);
