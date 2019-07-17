import { Variadic, Unary } from "../types"

/**
 * ```
 * compose :: (y => z, ..., a => b) => a => z
 * ```
 * -----------------------------------------------------------------------------
 * Returns the composition, right-to-left, of the _functions_ with with the
 * given _value_, e.g.:
 *
 * ```
 * compose(h, g, f)(v) => h(g(f(v)))
 * ```
 */
export declare function compose(...unaries: Unary<any, any>[]): Unary<any, any>
