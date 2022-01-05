import { First, Last } from "../types"

/**
 * ```haskell
 * compose :: (aⁿ⁻¹ => aⁿ, ..., a¹ => a², a⁰ => a¹) => a⁰ => aⁿ
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a number, _n_, unary Functions of the form `aⁿ⁻¹ => aⁿ`, and composes
 * them in a right-to-left order, passing the value, _a⁰_, to the right-most
 * function, the return value, _a¹_ to the next-right-most function, etc.
 * finally returning _aⁿ_.
 *
 * @param ...as - functions to apply, in right-to-left order
 * @param a - argument to the last function, `a⁰ => a¹`
 *
 * @example
 * ```
 * compose(h, g, f)(a) //=> h(g(f(a)))
 * ```
 *
 * @warning
 * While _compose_ can correctly detect the types of _a⁰_ and _aⁿ_, it
 * cannot detect if the return type for an inner function fails to satisfy the
 * type requirements for the next function. In the above example, the TypeScript
 * Compiler will not consider it an error if _f_ returns a `number`, but _g_
 * accepts only a `string`.
 *
 * To guarantee type safety, use _fluentCompose_.
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function compose<FS extends ((x: any) => any)[]>(...fs: FS) {
  type A0 = First<Parameters<Last<FS>>>
  type AN = ReturnType<First<FS>>

  return (a: A0): AN => fs.reduceRight((v, f) => f(v), a) as AN
}
