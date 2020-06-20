import { sign } from "@mwm/sign";

export const signatures = [
  "reduce->reducer     :: ((a, b) => a) => a => [b⁰, b¹, b², ..., bⁿ] => a",
  "reduce->accumulator ::                  a => [b⁰, b¹, b², ..., bⁿ] => a",
  "reduce              ::                       [b⁰, b¹, b², ..., bⁿ] => a",
];

export const implementation = (reducer) => (accumulator) => (iterable) => {
  if (iterable.length > 0) {
    const [value, ...reducedArray] = iterable;
    const reducedAccumulator = reducer(accumulator, value);
    return reduce(reducer)(reducedAccumulator)(reducedArray);
  } else {
    return accumulator;
  }
};

/**
 * ```
 * reduce :: ((a, b) => a) => a => [b⁰, b¹, b², ..., bⁿ] => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * __reduce__ is a _Unary_ _Combinator_, that reduces an _Iterable_, in
 * first-to-last order, to a single value. It does this by passing an initial
 * value, the _accumulator_ and the current value of the _Iterable_, to a
 * _reducer_ function. The return value for that call is used as the accumulator
 * for the next iteration.
 *
 */
export const reduce = sign(signatures, implementation);
