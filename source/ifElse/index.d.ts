import { Predicate, Unary } from "../types"
/**
 * ```
 * ifElse :: (a => Boolean) => (a => b) => (a => c) => a => b|c
 * ```
 * -----------------------------------------------------------------------------
 * Takes a __predicate__, an __onTrue__ function, an  __onFalse__ function, and
 * a __value__. If `predicate(value)` is _truthy_, it will return the result of
 * applying `onTrue(value)`, if it is _falsy_, ifElse will return the result of
 * applying `onFalse(value)`.
 */
export declare const ifElse: <T, U, V>(
  predicate: Predicate<T>
) => (onTrue: Unary<T, U>) => (onFalse: Unary<T, V>) => (value: U) => U | V
