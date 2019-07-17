import { sign } from "@mwm/sign"

export const implementation = f => (...as) => f(...as)

export const signatures = [
  "iife :: (...as -> b) => ...as => b",
  "iife ::                 ...as => b",
]

export const iife = sign(signatures, implementation)
