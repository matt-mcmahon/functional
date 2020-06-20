import { isDefined } from "../is-defined/is-defined.ts";

/**
 * ```
 * defaultTo :: a => b => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * If __b__ is `null` or `undefined` return __a__, otherwise return __b__.
 *
 */
export const defaultTo = <A>(a: A) => <B>(b: B) => isDefined(b) ? b : a;
