import { Variadic, Curried } from "../types"

/**
 * ```
 * curryN :: n => ((a⁰, a¹, ..., aⁿ) => b) => a⁰ => a¹ => ... => aⁿ => b
 * ```
 * -----------------------------------------------------------------------------
 * Converts a _Variadic_ function that accepts _arity_ number of arguments into
 * a series of arity-number _Unary_ functions that produce the same final value.
 *
 * ```
 * const sum = (...ns) => ns.reduce((n,m)=>n+m,0)
 */
export declare function curryN<T>(
  arity: number
): (originalFunction: Variadic<any, T>) => Curried<any, T>
