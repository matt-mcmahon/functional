import { sign } from "@mwm/sign"

export const signatures = [
  { "partial :: (a¹, a², …, aⁿ => b) => (a¹, …) => (…, aⁿ) => b": 1 },
  { "partial ::                         (a¹, …) => (…, aⁿ) => b": Infinity },
]

export const implementation = f =>
  function g(...as) {
    const signatures = [{ [`${f.name}${as.length} :: ...as => b`]: Infinity }]
    return as.length < f.length
      ? sign(signatures, (...bs) => g(...as, ...bs))
      : f(...as)
  }

export const partial = sign(signatures, implementation)
