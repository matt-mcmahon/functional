import { sign } from "@mwm/sign";

export const signatures = ["tail :: as => as"];

export const implementation = (as) => as.slice(1);

/**
 * ```
 * tail :: as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the portion of an array not including the first element.
 *
 */
export const tail = sign(signatures, implementation);
