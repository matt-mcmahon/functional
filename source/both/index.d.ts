import { Unary, Predicate } from "../types"

/**
 * ```
 * both :: (a => b) => (a => c) => a => b|c
 * ```
 * -----------------------------------------------------------------------------
 * Returns the result of calling the first Predicate if `mapAB(a) == false`,
 * otherwise returns `mapAC(a)`.
 *
 */
export declare function both<A, B, C>(
  mapAB: Unary<A, B>,
  mapAC: Unary<A, C>,
  a: A
): B | C
