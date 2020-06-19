import { Reducer, Iterable } from "../types";

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
export declare function reduce<A, I, V>(
  reducer: Reducer<A, I, V>,
  accumulator: A,
  iterable: Iterable<I>,
): V;
