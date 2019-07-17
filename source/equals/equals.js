import { sign } from "@mwm/sign"

export const signatures = [
  "equals :: a -> b -> Boolean",
  "equals ::      b -> Boolean",
]

export const implementation = a => b => a === b

export const equals = sign(signatures, implementation)
