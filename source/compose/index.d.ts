import { Variadic, Unary } from "../types";

/**
 * ```
 * curry :: ((a¹, a²..., aⁿ) => b) => a¹ => a²...=> aⁿ => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the composition, right-to-left, of each _functions_ where the output
 * of the right-most is given as the input to the next-right-most function,
 * etc., e.g.:
 *
 * ```
 * compose(h, g, f)(v) => h(g(f(v)))
 * ```
 */
export declare function compose(...unaries: Unary<any, any>[]): Unary<any, any>;
