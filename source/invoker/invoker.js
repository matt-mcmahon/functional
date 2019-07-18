import { sign } from "@mwm/sign"

export const signatures = [
  { "invoker->method    :: k => (...as) => (b.k => c) => c": 1 },
  { "invoker->arguments ::      (...as) => (b.k => c) => c": Infinity },
  { "invoker->context   ::                 (b.k => c) => c": 1 },
]

export const implementation = k => (...as) => b => b[k](...as)

export const invoker = sign(signatures, implementation)
