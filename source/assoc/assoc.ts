import { sign } from "@mwm/sign";
import { clone } from "../clone/clone.ts";

export const signatures = [
  { "assoc :: k => a => {k:*} => {k:a}": 1 },
  { "assoc ::      a => {k:*} => {k:a}": 1 },
  { "assoc ::           {k:*} => {k:a}": 1 },
];

export const implementation = (key) =>
  (value) => (object) => Object.assign(clone(object), { [key]: value });

/**
 * ```
 * assoc :: k => a => b => {...b, k:a}
 * ```
 * -----------------------------------------------------------------------------
 *
 * Clones an object, associating the key, __k__, with value, __a__. For example:
 *
 * ```
 * b[k] = a <=> assoc(k, a, b).
 * ```
 *
 */
export const assoc = sign(signatures, implementation);
