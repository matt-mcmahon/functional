import { sign } from "@mwm/sign"

export const signatures = [
  "filter :: (a => Boolean) => as => as",
  "filter ::                   as => as",
]

export const implementation = predicate => as => as.filter(predicate)

export const filter = sign(signatures, implementation)
