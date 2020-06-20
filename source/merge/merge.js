import { sign } from "@mwm/sign";

export const signatures = [
  { "merge :: a => b => c": 1 },
  { "merge ::      b => c": 1 },
];

export const implementation = (a) => (b) => Object.assign({}, a, b);

/**
 * ```
 * merge :: a => b => c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Performs a shallow merge of two objects.
 *
 */
export const merge = sign(signatures, implementation);
