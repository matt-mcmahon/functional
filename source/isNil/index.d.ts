import { Predicate } from "../types";
/**
 * ```
 * isNil :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is `null` or `undefined`,
 * `false` otherwise. For example
 *
 * ```
 * isNil(null)      <=> true
 * isNil(undefined) <=> true
 * isNil(0)         <=> false
 * ```
 */
export declare function isNil<A>(a: A): boolean;
