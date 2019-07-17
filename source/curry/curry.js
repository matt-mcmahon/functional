import { sign } from "@mwm/sign"
import { curryN } from "../curryN/curryN"

export const signatures = [
  "curry :: ((a, b, ..., y) => z) => a => b => ... y => z",
]

export const implementation = originalFunction =>
  curryN(originalFunction.length)(originalFunction)

export const curry = sign(signatures, implementation)
