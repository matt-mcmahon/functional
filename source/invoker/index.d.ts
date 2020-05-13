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
export declare const invoker:
  <T extends { [key: string]: Function }, K extends keyof T>
    (arity: Number, methodName: K) =>
    (...as: any[]) =>
      (object: T) => any
