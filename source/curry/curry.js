import { sign } from "@mwm/sign";
import { curryN } from "../curry-n/curry-n.js";

export const signatures = [
  "curry :: ((a¹, a²..., aⁿ) => b) => a¹ => a²...=> aⁿ => b",
];

export const implementation = (originalFunction) =>
  curryN(originalFunction.length)(originalFunction);

/**
 * ```
 * curry :: ((a¹, a²..., aⁿ) => b) => a¹ => a²... => aⁿ => b
 * ```
 * -----------------------------------------------------------------------------
 * Converts a _Variadic_ function into a series of _Unary_ functions that
 * produce the same final value.
 *
 */
export const curry = sign(signatures, implementation);
