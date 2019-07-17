import { sign } from "@mwm/sign"

const signatures = [
  { "always :: a => * => a": 1 },
  { "always ::      * => a": 0 },
]

const implementation = value => () => value

export const always = sign(signatures, implementation)
