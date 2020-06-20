import { sign } from "@mwm/sign";

export const signatures = [
  "uncurry->length  :: n => (a¹ => a² => ... => aⁿ => b) => (a¹, a², ..., aⁿ) => b",
  "uncurry->curried ::      (a¹ => a² => ... => aⁿ => b) => (a¹, a², ..., aⁿ) => b",
];

const applyArgument = (currentStep, argument) => currentStep(argument);

export const implementation = (length) => (curried) => (...allArguments) => {
  const expectedArguments = allArguments.slice(0, length);
  return expectedArguments.reduce(applyArgument, curried);
};

/**
 * ```
 * uncurry :: n => (a¹ => a² => ... => aⁿ => b) => (a¹, a², ..., aⁿ) => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a length, _n_, a _curried_ function has _n_ productions, and returns a
 * function that accepts _n_ arguments.
 *
 * ```
 * uncurry(3, a => b => c => a + b + c) <=> (a, b, c) => a + b + c
 *
 */
export const uncurry = sign(signatures, implementation);
