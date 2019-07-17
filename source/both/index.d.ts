import { Unary, Predicate } from "../types"

/**
 * ```
 * both :: (a => b) => (a => c) => a => b|c
 * ```
 * -----------------------------------------------------------------------------
 * Returns the result of calling the first Predicate if
 * `first(value) == false`, otherwise returns `andSecond(value)`.
 *
 */
export declare function both<A, B, C>(
  first: Unary<A, B>
): (andSecond: Unary<A, C>) => (value: A) => B | C
