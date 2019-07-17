import { sign } from "@mwm/sign"

export const signatures = ["isNil :: a => boolean"]

export const implementation = a => a === null || a === undefined

export const isNil = sign(signatures, implementation)
