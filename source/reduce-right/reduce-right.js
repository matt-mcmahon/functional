import { sign } from "@mwm/sign";

export const signatures = [
  "reduceRight->reducer     :: ((a, b) => a) => a => [bⁿ, ..., b², b¹, b⁰] => a",
  "reduceRight->accumulator ::                  a => [bⁿ, ..., b², b¹, b⁰] => a",
  "reduceRight              ::                       [bⁿ, ..., b², b¹, b⁰] => a",
];

export const implementation = (r) => (a) => (bs) => {
  if (bs && bs.length > 0) {
    const [value] = bs.slice(-1);
    const reducedArray = bs.slice(0, -1);
    const reducedAccumulator = r(a, value);
    return implementation(r)(reducedAccumulator)(reducedArray);
  } else {
    return a;
  }
};

/**
 * ```
 * reduceRight :: ((a, b) => a) => a => [bⁿ, ..., b², b¹, b⁰] => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * __reduceRight__ is a _Unary_ _Combinator_, that reduces an _Iterable_, in
 * last-to-first order, to a single value. It does this by passing an initial
 * value, the _accumulator_ and the last value of the _Iterable_, to _reducer_
 * function. The return value for that call is used as the accumulator for the
 * next iteration.
 *
 */
export const reduceRight = sign(signatures, implementation);
