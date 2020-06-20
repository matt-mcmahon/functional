import { sign } from "@mwm/sign";

export const signatures = ["isDefined :: a => boolean"];

export const implementation = (a) => a === a && a !== undefined && a !== null;

/**
 * ```
 * isDefined :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns `false` if __a__ is `NaN`, `undefined`, or `null`, otherwise returns
 * `true`.
 *
 */
export const isDefined = sign(signatures, implementation);
