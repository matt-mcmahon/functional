import { sign } from "@mwm/sign"

export const signatures = [
  "tap :: (a => *) => a => a",
  "tap ::             a => a",
]

export const implementation = f => a => {
  f(a)
  return a
}

export const tap = sign(signatures, implementation)
