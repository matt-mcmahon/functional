import { sign } from "@mwm/sign"

export const signatures = [
  { "either :: (a => b) => (a => c) => a => b|c": 1 },
  { "either ::             (a => c) => a => b|c": 1 },
  { "either ::                         a => b|c": 1 },
]

export const implementation = mapAB => mapAC => a => mapAB(a) || mapAC(a)

export const either = sign(signatures, implementation)
