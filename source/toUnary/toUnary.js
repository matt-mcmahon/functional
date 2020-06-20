import { sign } from "@mwm/sign";

export const signatures = [
  { "toUnary->variadic :: (...as => b) => as => b": 1 },
  { "toUnary->array    ::                 as => b": 1 },
];

export const implementation = (variadic) => (as) => variadic(...as);

/**
 * ```
 * toUnary :: (...as => b) => as => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a _Variadic_ function and returns a _Unary_ version of the function
 * that accepts a single array as its argument instead.
 *
 */
export const toUnary = sign(signatures, implementation);
