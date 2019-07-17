import { sign } from "@mwm/sign"

export const signatures = [
  { "invoker->method    :: k => (...as) => {k:b} => b": 2 },
  { "invoker->arguments ::      (...as) => {k:b} => b": Infinity },
  { "invoker->context   ::                 {k:b} => b": 1 },
]

export const implementation = k => (...as) => b => b[k](...as)

export const invoker = sign(signatures, implementation)
