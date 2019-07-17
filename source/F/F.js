import { sign } from "@mwm/sign"

export const signatures = [{ "F :: a => false": 1 }]

export const implementation = a => false

export const F = sign(signatures, implementation)
