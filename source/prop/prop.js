import { sign } from "@mwm/sign"

export const signatures = [
  "prop->key :: k -> {k:a} -> a",
  "prop      ::      {k:a} -> a",
]

export const implementation = propName => object => object[propName]

export const prop = sign(signatures, implementation)
