import { sign } from "@mwm/sign";

import { isDefined } from "../is-defined/is-defined.ts";

export const signatures = [
  { "defaultTo :: a => b => a|b": 1 },
  { "defaultTo ::      b => a|b": 1 },
];

export const implementation = (defaultValue) =>
  (value) => isDefined(value) ? value : defaultValue;

/**
 * ```
 * defaultTo :: a => b => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * If __b__ is `null` or `undefined` return __a__, otherwise return __b__.
 *
 */
export const defaultTo = sign(signatures, implementation);
