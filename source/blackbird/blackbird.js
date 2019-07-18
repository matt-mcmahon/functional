import { sign } from "@mwm/sign"

export const signatures = [
  {
    "blackbird->converging :: ((b¹, b², ..., bⁿ) => c) => (a => b¹, a => b², ..., a => bⁿ) => a => c": 1,
  },
  {
    "blackbird->parts      ::                             (a => b¹, a => b², ..., a => bⁿ) => a => c": Infinity,
  },
  {
    "blackbird             ::                                                                 a => c": 1,
  },
]

export const implementation = converging => (...parts) => a => {
  const bs = parts.map(part => part(a))
  return converging(...bs)
}

export const blackbird = sign(signatures, implementation)
