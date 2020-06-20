import { sign } from "@mwm/sign";

export const signatures = ["isNil :: a => boolean"];

export const implementation = (a) => a === null || a === undefined;

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
export const isNil = sign(signatures, implementation);
