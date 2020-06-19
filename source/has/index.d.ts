import { Key } from "../types";

/**
 * ```
 * has :: k => a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a _Predicate_ that returns `true` if it's argument has an owned
 * property, __k__, otherwise returns `false`. Unlike the `in` operator, `has`
 * will not check the prototype chain. For example:
 *
 * ```
 * 'toString' in {}     //=> true
 * has('toString', {})  //=> false
 * ```
 *
 * @param {string|symbol} k the name or symbol of the property to check for
 * @param {unknown} a the object to check for ownership of the property
 */
export declare const has: (k: Key) => (a: unknown) => boolean;
