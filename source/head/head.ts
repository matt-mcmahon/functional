import { sign } from "@mwm/sign";

export const signatures = [{ "head :: as => a": 1 }];

export const implementation = (as) => as[0];

/**
 * ```
 * head :: as => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the first element of an array.
 *
 */
export const head = sign(signatures, implementation);
