import { Reducer, Iterable } from "../types"

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
export declare function reduceRight<A, I, V>(
  reducer: Reducer<A, I, V>,
  accumulator: A,
  iterable: Iterable<I>
): V
