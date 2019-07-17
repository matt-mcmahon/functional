import { sign } from "@mwm/sign"

export const signatures = [
  "replace->what   :: (s|r) => s => s => s",
  "replace->with   ::          s => s => s",
  "replace->within ::               s => s",
]

export const implementation = what => replacement => within =>
  within.replace(what, replacement)

export const replace = sign(signatures, implementation)
