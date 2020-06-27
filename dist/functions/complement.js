"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complement = void 0;
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
exports.complement = (predicate) => (a) => !predicate(a);
