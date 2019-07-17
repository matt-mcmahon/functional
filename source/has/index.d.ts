import { Key, Predicate } from "../types"

/**
 * ```
 * has :: s => {s} => boolean
 * ```
 * -----------------------------------------------------------------------------
 * Creates a __Predicate__ that returns `true` if it's argument has an owned
 * property named, _property_, otherwise returns `false`. Unlike the operator
 * `in`, the function `has` will not check the prototype chain. For example:
 *
 * ```
 * 'toString' in {}     //=> true
 * has('toString', {})  //=> false
 * ```
 *
 * @param {string|symbol} key the name or symbol of the property to check for
 * @param {object} object the object to check for ownership of the property
 */
export declare function has(key: Key, object: object): boolean
