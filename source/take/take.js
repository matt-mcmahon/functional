import { sign } from "@mwm/sign"

export const signatures = [
  { "take :: n => as => as": 1 },
  { "take ::      as => as": 1 },
]

export const implementation = n => as => as.slice(0, n)

export const take = sign(signatures, implementation)
