import { sign } from "@mwm/sign"

export const signatures = [
  "reduce->reducer     :: ((a, b) => a) => a => [b⁰, b¹, b², ..., bⁿ] => a",
  "reduce->accumulator ::                  a => [b⁰, b¹, b², ..., bⁿ] => a",
  "reduce              ::                       [b⁰, b¹, b², ..., bⁿ] => a",
]

export const implementation = reducer => accumulator => iterable => {
  if (iterable.length > 0) {
    const [value, ...reducedArray] = iterable
    const reducedAccumulator = reducer(accumulator, value)
    return reduce(reducer)(reducedAccumulator)(reducedArray)
  } else {
    return accumulator
  }
}

export const reduce = sign(signatures, implementation)
