import { sign } from "@mwm/sign"

export const signatures = [{ "last :: as => a": 1 }]

export const implementation = as => as[as.length - 1]

export const last = sign(signatures, implementation)
