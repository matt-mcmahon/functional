import { sign } from "@mwm/sign";

export const signatures = [
  "equals :: a => b => Boolean",
  "equals ::      b => Boolean",
];

export const implementation = (a) => (b) => a === b;

/**
 * ```
 * equals :: a => b => Boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * __equals__ creates a _Predicate_ that compares the arguments __a__, to the
 * argument __b__ using the strict-equality operator, i.e.:
 *
 * ```
 * equals(a, b) <=> a === b
 * ```
 *
 */
export const equals = sign(signatures, implementation);
