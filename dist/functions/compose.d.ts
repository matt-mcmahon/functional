import { Compose, Last } from "../types";
/**
 * ```
 * compose :: (aⁿ⁻¹ => aⁿ, ..., a¹ => a², a⁰ => a¹) => a⁰ => aⁿ
 * ```
 *
 * Takes any number, _n_, unary Functions of the form `aˣ⁻¹ => aˣ`, and composes
 * them in a right-to-left order, passing the value, _a⁰_, to the right-most
 * function, the return value, _a¹_ to the next-right-most function, etc.
 * finally returning _aⁿ_. For example:
 *
 * ```
 * compose(h, g, f)(a) <=> h(g(f(a)))
 * ```
 *
 * ## Warning
 *
 * While _compose(...)_ can correctly detect the types of _a⁰_ and _aⁿ_, it
 * cannot detect if the return type for an inner function fails to satisfy the
 * type requirements for the next function. In the above example, the TypeScript
 * Compiler will not consider it an error if _f_ returns a `number`, but _g_
 * accepts only a `string`.
 *
 * To guarantee type safety, use the _fluent_ API:
 *
 * ```
 * compose.fluent(h).then(g).then(f).invoke(a) <=> h(g(f(a)))
 * ```
 *
 * The fluent algorithm guarantees that the return type of _f_ will match the
 * argument type of _g_, that _g_ will match _h_, etc. Note that the final
 * `invoke` method is equivalent to:
 *
 * ```
 * compose.fluent(h).then(g).then(f)(a)
 * ```
 * and if you assign a fluent chain to a variable you may treat it as a normal
 * function. For example:
 * ```
 * const hgf = compose.fluent(h).then(g).then(f)
 * hgf(a) <=> hgf.invoke(a)
 * ```

 *
 *
 * ```
 * ```
 */
export declare const compose: (<FS extends ((x: any) => any)[]>(...fs: FS) => (a: Parameters<Last<FS>>[0]) => ReturnType<FS[0]>) & {
    fluent: <B, A>(f: (b: B) => A) => Compose<B, A>;
};
