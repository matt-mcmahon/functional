import { sign } from "@mwm/sign";

export const signatures = [
  { "toVariadic->unary     :: (as => b) => ...as => b": 1 },
  { "toVariadic->arguments ::              ...as => b": Infinity },
];

export const implementation = (unary) => (...as) => unary(as);

/**
 * ```
 * toVariadic :: (as => b) => ...as => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a _Unary_ function that accepts an array as its argument, and returns
 * that accepts any number of arguments instead.
 *
 */
export const toVariadic = sign(signatures, implementation);
