import { sign } from "@mwm/sign"

export const signatures = ["trim :: s => s"]

export const implementation = s => String(s).trim()

export const trim = sign(signatures, implementation)
