/**
 * ```
 * invoker :: n => k => (...as) => b => c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes an __arity__, a __methodName__, and one or more arguments, __args__.
 * Accepts an __object__ with a method of that name and arity and returns the
 * result of calling object’s method, e.g.:
 *
 * ```
 * object[method](...args)
 * ```
 *
 */
export declare const invoker: (
  arity: Number
) => (methodName: String) => (...args: any[]) => (object: Object) => any
