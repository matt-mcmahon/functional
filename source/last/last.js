import { sign } from "@mwm/sign";

export const signatures = [{ "last :: as => a": 1 }];

export const implementation = (as) => as[as.length - 1];

/**
 * ```
 * last :: as => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the last element in an array.
 *
 */
export const last = sign(signatures, implementation);
