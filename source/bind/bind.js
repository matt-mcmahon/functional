import { sign } from "@mwm/sign"

export const signatures = [
  { "bind->method :: (...as #> b) => o => ...as => b": 1 },
  { "bind->this   ::                 o => ...as => b": 1 },
  { "bound        ::                      ...as => b": Infinity },
]
export const implementation = m => t => (...as) => m.apply(t, as)
export const bind = sign(signatures, implementation)
