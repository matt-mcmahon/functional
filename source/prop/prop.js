import { sign } from "@mwm/sign"

export const signatures = [
  "prop->key :: k => a.k => b",
  "prop      ::      a.k => b",
]

export const implementation = k => a => a[k]

export const prop = sign(signatures, implementation)
