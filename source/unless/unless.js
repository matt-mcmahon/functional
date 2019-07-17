import { sign } from "@mwm/sign"

export const signatures = [
  "unless->predicate :: (a => boolean) => (a => b) => a => a|b",
  "unless->action    ::                   (a => b) => a => a|b",
  "unless            ::                               a => a|b",
]

export const implementation = predicate => action => a =>
  predicate(a) ? a : action(a)

export const unless = sign(signatures, implementation)
