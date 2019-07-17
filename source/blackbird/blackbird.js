import { sign } from "@mwm/sign"

export const signatures = [
  {
    "blackbird->converging   :: ((b¹, b², ..., bⁿ) -> c) -> (a -> b¹, a => b², ..., a -> bⁿ) -> a -> c": 1,
  },
  {
    "blackbird->parts        ::                             (a -> b¹, a => b², ..., a -> bⁿ) -> a -> c": Infinity,
  },
  {
    "blackbird->parts->apply ::                                                                 a -> c": 1,
  },
]

export const implementation = convergingFunction => (...parts) => value => {
  const values = parts.map(part => part(value))
  return convergingFunction(...values)
}

export const blackbird = sign(signatures, implementation)
