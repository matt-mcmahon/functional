import { sign } from "@mwm/sign";

export const implementation = (f) => (...as) => f(...as);

export const signatures = [
  "iife :: (...as => b) => ...as => b",
  "iife ::                 ...as => b",
];

/**
 * ```
 * iife :: (...as => b, ...as) => b
 * ```
 * -----------------------------------------------------------------------------
 * Immediately Invokes a function, passing in the supplied parameters and
 * returning the result, if any.
 *
 */
export const iife = sign(signatures, implementation);
