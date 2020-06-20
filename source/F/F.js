import { sign } from "@mwm/sign";

export const signatures = [{ "F :: * => false": 1 }];

export const implementation = () => false;

/**
 * ```
 * F :: * => false
 * ```
 * -----------------------------------------------------------------------------
 *
 * __F__ is a _Nullary_ function that always returns `false`.
 *
 */
export const F = sign(signatures, implementation);
