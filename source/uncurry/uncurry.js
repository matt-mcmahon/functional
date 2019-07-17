import { sign } from "@mwm/sign"

export const signatures = [
  "uncurry->length  :: n => (a¹ => a² => ... => aⁿ => b) => (a¹, a², ..., aⁿ) => b",
  "uncurry->curried ::      (a¹ => a² => ... => aⁿ => b) => (a¹, a², ..., aⁿ) => b",
]

const applyArgument = (currentStep, argument) => currentStep(argument)

export const implementation = length => curried => (...allArguments) => {
  const expectedArguments = allArguments.slice(0, length)
  return expectedArguments.reduce(applyArgument, curried)
}

export const uncurry = sign(signatures, implementation)
