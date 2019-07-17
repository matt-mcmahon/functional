import { sign } from "@mwm/sign"

export const signatures = [
  { "merge :: a => b => c": 1 },
  { "merge ::      b => c": 1 },
]

export const implementation = a => b => Object.assign({}, a, b)

export const merge = sign(signatures, implementation)
