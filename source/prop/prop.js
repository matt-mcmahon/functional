import { sign } from "@mwm/sign";

export const signatures = [
  "prop->key :: k => a.k => b",
  "prop      ::      a.k => b",
];

export const implementation = (k) => (a) => a[k];

/**
 * ```
 * prop :: k => a.k => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the value of the given _property_ for the object.
 *
 */
export const prop = sign(signatures, implementation);
