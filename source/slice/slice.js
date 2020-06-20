import { sign } from "@mwm/sign";

export const signatures = [
  "slice->begin :: n => m => as => as",
  "slice->end   ::      m => as => as",
  "slice->list  ::           as => as",
];

export const implementation = (n) => (m) => (as) =>
  as && typeof as.slice === "function" ? as.slice(n, m) : [...as].slice(n, m);

/**
 * ```
 * slice->beginning :: n => m => as => as
 * slice->end       ::      m => as => as
 * slice->list      ::           as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns part of an _Iterable_ object, __as__, from the beginning index,
 * __n__, up to but not including the _end_ index, __m__. For example:
 *
 * ```
 * const as = [0, 1, 2, 3, 4]
 * slice(1)(4)(as) <=> as.slice(1, 4) <=> [1, 2, 3]
 * ```
 */
export const slice = sign(signatures, implementation);
