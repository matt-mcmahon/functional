import { sign } from "@mwm/sign"

export const hasOwnProperty = {}.hasOwnProperty

export const signatures = [
  "has :: s => a => boolean",
  "has ::      a => boolean",
]

export const implementation = key => object => hasOwnProperty.call(object, key)

export const has = sign(signatures, implementation)
