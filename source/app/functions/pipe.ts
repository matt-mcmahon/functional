import type { First, Last } from "../../index.ts";

/**
 * ```haskell
 * pipe :: (a⁰ => a¹, ..., aⁿ⁻¹ -> aⁿ) => a⁰ => aⁿ
 * ```
 *
 * Takes any number, _n_, unary Functions of the form `aˣ => aˣ⁺¹`, and composes
 * them in a left-to-right order, passing the value, _a⁰_, to the left-most
 * function, the return value, _a¹_ to the next-left-most function, etc.,
 * finally returning _aⁿ_. For example:
 *
 * ```
 * pipe(f, g, h)(a) <=> h(g(f(a)))
 * ```
 *
 * ## Warning
 *
 * While _pipe(...)_ can correctly detect the types of _a⁰_ and _aⁿ_, it cannot
 * detect if the return type for an inner function fails to satisfy the type
 * requirements for the next function. In the above example, the TypeScript
 * Compiler will not consider it an error if _f_ returns a `number`, but _g_
 * accepts only a `string`.
 *
 * To guarantee type safety, use the _fluent_ API:
 *
 * ```
 * import { flow } from "@mwm/functions/flow"
 * flow(f).then(g).then(h).invoke(a) <=> h(g(f(a)))
 * ```
 */
// deno-lint-ignore no-explicit-any
export function pipe<FS extends ((x: any) => any)[]>(...fs: FS) {
  type A0 = First<Parameters<First<FS>>>;
  type AN = ReturnType<Last<FS>>;

  return (a: A0): AN => fs.reduce((v, f) => f(v), a) as AN;
}
