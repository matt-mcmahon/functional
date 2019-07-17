import { sign } from "@mwm/sign"

export const signatures = [{ "head :: as -> a": 1 }]

export const implementation = values => values[0]

export const head = sign(signatures, implementation)
