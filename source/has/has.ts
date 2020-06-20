import { sign } from "@mwm/sign";

export const hasOwnProperty = {}.hasOwnProperty;

export const signatures = [
  "has :: k => a => boolean",
  "has ::      a => boolean",
];

export const implementation = (k) => (a) => hasOwnProperty.call(a, k);

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
export const has = sign(signatures, implementation);
