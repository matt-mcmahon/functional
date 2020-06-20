import { sign } from "@mwm/sign";

export const signatures = [
  { "invoker->method    :: k => (...as) => (b.k => c) => c": 1 },
  { "invoker->arguments ::      (...as) => (b.k => c) => c": Infinity },
  { "invoker->context   ::                 (b.k => c) => c": 1 },
];

export const implementation = (k) => (...as) => (b) => b[k](...as);

/**
 * ```
 * invoker :: k => (...as) => (b.k => c) => c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a method name, __k__; one or more arguments, __as__; and an object,
 * __b__, which has a method of name __k__. It invokes the method, applying
 * __as__ as arguments, and returns the result, __c__; i.e.:
 *
 * ```
 * invoker(k, ...as, b) <=> b[k](...as) <=>
 * ```
 *
 */
export const invoker = sign(signatures, implementation);
