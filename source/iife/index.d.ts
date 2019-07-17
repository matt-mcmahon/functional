import { Variadic } from "../types"
/**
 * ```
 * iife :: (...a => b, ...a) => b
 * ```
 * -----------------------------------------------------------------------------
 * Immediately Invokes a function, passing in the supplied parameters and
 * returning the result, if any.
 *
 */
export declare function iife<A, B>(invoke: Variadic<A[], B>, ...args: A[]): B
