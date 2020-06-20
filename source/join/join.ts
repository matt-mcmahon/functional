import { sign } from "@mwm/sign";

export const signatures = [
  { "join->withCharacter :: s => as => s": 1 },
  { "join->list          ::      as => s": 1 },
];

export const implementation = (s) => (as) => as.join(s);

/**
 * ```
 * "join:: s => as => s
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a list of values and returns a concatenated string.
 *
 */
export const join = sign(signatures, implementation);
