/**
 * ```haskell
 * invoker = k => (...as) => (c: { k: (...as) => b }) => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a method name, __k__, one or more arguments, __as__, and a value, __c__, which has a method of name __ab__ that accepts __as__ and returns __b__. It invokes the method, applying __as__ as it's arguments, and returns the result, __b__.
 *
 *
 * @example
 * ```
 * const methodName = "slice"
 * const methodArguments = [6]
 * const target = "abcdefghijklm"
 *
 * invoker(methodName)(...methodArguments)(target) //=> "ghijklm"
 * target[methodName](...methodArguments) //=> "ghijklm"
 * ```
 */
export const invoker =
  <K extends PropertyKey>(k: K) =>
  <AS extends unknown[]>(...as: AS) =>
  <B>(c: { [k in K]: (...as: AS) => B }): B =>
    c[k](...as)
