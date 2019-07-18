import { sign } from "@mwm/sign"

export const signatures = ["tail :: as => as"]

export const implementation = as => as.slice(1)

export const tail = sign(signatures, implementation)
