import { sign } from "@mwm/sign"

import { isDefined } from "../isDefined"

export const signatures = [
  { "defaultTo :: a => b => a|b": 1 },
  { "defaultTo ::      b => a|b": 1 },
]

export const implementation = defaultValue => value =>
  isDefined(value) ? value : defaultValue

export const defaultTo = sign(signatures, implementation)
