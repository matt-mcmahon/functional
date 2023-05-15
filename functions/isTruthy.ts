import { Falsy } from "./isFalsy.ts";
export type Truthy<A> = Exclude<A, Falsy>;

/**
 * ```haskell
 * isTruthy :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns `true` if __a__ is a truthy value, false otherwise.
 */
export const isTruthy = <A extends unknown>(a: A): a is Truthy<A> => !!a;
