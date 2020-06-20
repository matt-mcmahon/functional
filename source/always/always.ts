import { sign } from "@mwm/sign";

export const signatures = [
  { "always :: a => * => a": 1 },
  { "always ::      * => a": 0 },
];

export const implementation = (a) => () => a;

/**
 * ```
 * always :: a => * => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a function that always returns _value_, ignoring any arguments.
 */
export const always = sign(signatures, implementation);
