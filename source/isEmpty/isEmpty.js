import { sign } from "@mwm/sign"

export const signatures = [{ "isEmpty :: a => Boolean": 1 }]

export const implementation = value =>
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === "string" && value.length === 0) ||
  (typeof value === "object" &&
    value !== null &&
    Object.keys(value).length === 0)

export const isEmpty = sign(signatures, implementation)
