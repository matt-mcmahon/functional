import { sign } from "@mwm/sign"

export const signatures = [
  { "toUnary->variadic :: (...as => b) => as => b": 1 },
  { "toUnary->array    ::                 as => b": 1 },
]

export const implementation = variadic => as => variadic(...as)

export const toUnary = sign(signatures, implementation)