import { sign } from "@mwm/sign";

export const signatures = [
  "filter :: (a => Boolean) => as => as",
  "filter ::                   as => as",
];

export const implementation = (predicate) => (as) => as.filter(predicate);

/**
 * ```
 * filter :: (a => Boolean) => as => as
 * ```
 * -----------------------------------------------------------------------------
 * Filters a list, keeping only the values for which the __predicate__ returns
 * _true_.
 *
 */
export const filter = sign(signatures, implementation);
