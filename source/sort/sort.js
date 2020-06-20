import { sign } from "@mwm/sign";

export const signatures = [
  "sort->sortingFunction :: ((a, a) => n) => as => as",
  "sort->list            ::                  as => as",
];

export const implementation = (mapAAN) => (as) => [...as].sort(mapAAN);

/**
 * ```
 * sort :: ((a, a) => n) => as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Sorts a list by applying the given sorting function.
 *
 */
export const sort = sign(signatures, implementation);
