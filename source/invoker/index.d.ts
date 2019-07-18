/**
 * ```
 * invoker :: k => (...as) => (b.k => c) => c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a method name, __k__; one or more arguments, __as__; and an object,
 * __b__, which has a method of that name. It invokes the method, applying the
 * arguments, __as__, and returns the result, __c__; i.e.:
 *
 * ```
 * invoker(k, ...as, b) <=> b[k](...as) <=>
 * ```
 *
 */
export declare const invoker: (
  arity: Number
) => (methodName: String) => (...args: any[]) => (object: Object) => any
