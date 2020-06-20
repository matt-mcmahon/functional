import { sign } from "@mwm/sign";

export const signatures = ["T :: a => true"];

export const implementation = (a) => true;

/**
 * ```
 * T :: a => true
 * ```
 * -----------------------------------------------------------------------------
 *
 * A function that always returns `true`.
 *
 */
export const T = sign(signatures, implementation);
