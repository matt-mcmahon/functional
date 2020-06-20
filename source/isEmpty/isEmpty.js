import { sign } from "@mwm/sign";

export const signatures = [{ "isEmpty :: a => Boolean": 1 }];

export const implementation = (value) =>
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === "string" && value.length === 0) ||
  (typeof value === "object" &&
    value !== null &&
    Object.keys(value).length === 0);

/**
 * ```
 * isEmpty :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is an empty value for it's type,
 * `false` otherwise. For example:
 *
 * ```
 * isEmpty("") //> true
 * isEmpty([]) //> true
 * isEmpty(0)  //> false
 * ```
 */
export const isEmpty = sign(signatures, implementation);
