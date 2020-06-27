import { isDefined, isNaN } from "../functions"

/**
 * ```
 * defaultTo :: a => b => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * If __b__ is `null`, `undefined`, or `NaN`, return __a__, otherwise return __b__.
 *
 */
export const defaultTo = <A>(a: A) => <B>(b: B) =>
  isNaN(b) ? a : isDefined(b) ? b : a
