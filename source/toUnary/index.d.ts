import { Variadic, Unary } from "../types"

/**
 * ```
 * toUnary :: (...as => b) => as => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a _Variadic_ function and returns a _Unary_ version of the function
 * that accepts a single array as its argument instead.
 *
 */
export declare function toUnary<A, B>(variadic: (...a: A[]) => B, as: A[]): B
