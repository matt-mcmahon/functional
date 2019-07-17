import { Variadic, Curried } from "../types"

/**
 * ```
 * curry :: ((a, b, ..., y) => z) => a => b => ... y => z
 * ```
 * -----------------------------------------------------------------------------
 * Converts a _Variadic_ function into a series of _Unary_ functions that
 * produce the same final value.
 *
 */
export declare function curry<T>(
  originalFunction: Variadic<any, T>
): Curried<any, T>
