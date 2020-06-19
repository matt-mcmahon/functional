import { Predicate, Unary } from "../types"
/**
 * ```
 * ifElse :: (a => Boolean) => (a => b) => (a => c) => a => b|c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a __predicate__, an __onTrue__ function, an  __onFalse__ function, and
 * a value, __a__. If `predicate(a)` is _truthy_, it returns `onTrue(a)`,
 * otherwise it returns `onFalse(a)`.
 */
export declare function ifElse<A, B, C>(
  predicate: Predicate<A>
): (onTrue: Unary<A, B>) => (onFalse: Unary<A, C>) => (a: A) => B | C
