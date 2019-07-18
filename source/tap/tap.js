import { sign } from "@mwm/sign"

export const signatures = [
  "tap :: (a => *) => a => a",
  "tap ::             a => a",
]

export const implementation = voidA => a => (voidA(a), a)

export const tap = sign(signatures, implementation)
