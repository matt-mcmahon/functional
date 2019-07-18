import { sign } from "@mwm/sign"
import { curryN } from "../curryN/curryN"

export const signatures = [
  "curry :: ((a¹, a²..., aⁿ) => b) => a¹ => a²...=> aⁿ => b",
]

export const implementation = originalFunction =>
  curryN(originalFunction.length)(originalFunction)

export const curry = sign(signatures, implementation)
