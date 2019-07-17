import { sign } from "@mwm/sign"

export const signatures = [
  { "either :: (a -> Boolean) -> (a -> Boolean) -> a -> Boolean": 1 },
  { "either ::                   (a -> Boolean) -> a -> Boolean": 1 },
  { "either ::                                     a -> Boolean": 1 },
]

export const implementation = firstPredicate => secondPredicate => value =>
  firstPredicate(value) || secondPredicate(value)

export const either = sign(signatures, implementation)
