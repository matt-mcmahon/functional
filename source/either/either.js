import { sign } from "@mwm/sign";

export const signatures = [
  { "either :: (a => b) => (a => c) => a => b|c": 1 },
  { "either ::             (a => c) => a => b|c": 1 },
  { "either ::                         a => b|c": 1 },
];

export const implementation = (mapAB) => (mapAC) => (a) => mapAB(a) || mapAC(a);

/**
 * ```
 * either :: (a => b) => (a => c) => a|c
 * ```
 * -----------------------------------------------------------------------------
 *
 * The __either__ combinator creates a _Unary_ from two functions. It returns
 * __b__ form calling `mapAB(a)` if __b__ is truthy. Otherwise it returns __c__
 * from calling `mapAC(a)`.
 *
 */
export const either = sign(signatures, implementation);
