/**
 * ```haskell
 * invoker = k => (...as) => (a: { k: (...as) => b }) => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a method name, __k__, one or more arguments, __as__. Returns a function that maps a value, __a__, which must have a method of the form
 * `a[k](...as) => b`,
 * to the value, __b__.
 *
 * @example
 * ```
 * const a = "abcdefghijklm"
 *
 * invoker('slice')(6)(a) //=> "ghijklm"
 * a.slice(6) //=> "ghijklm"
 * ```
 */
export const invoker = <K extends PropertyKey>(k: K) =>
  <AS extends unknown[]>(...as: AS) =>
    <B>(c: { [k in K]: (...as: AS) => B }): B => c[k](...as);
