import { Variadic, Curried } from "../types";

/**
 * ```
 * curry :: ((a¹, a²..., aⁿ) => b) => a¹ => a²... => aⁿ => b
 * ```
 * -----------------------------------------------------------------------------
 * Converts a _Variadic_ function into a series of _Unary_ functions that
 * produce the same final value.
 *
 */
export declare function curry<A, B>(
  originalFunction: Variadic<A, B>,
): Curried<A, B>;
