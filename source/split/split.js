import { sign } from "@mwm/sign"

export const signatures = [
  { "split :: a -> b -> bs": 1 },
  { "split ::      b -> bs": 1 },
]

export const implementation = (a = " ") => b => b.split(a)

export const split = sign(signatures, implementation)
