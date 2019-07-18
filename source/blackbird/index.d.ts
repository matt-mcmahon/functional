import { Variadic, Binary, Unary } from "../types"
/**
 * ```
 * blackbird  :: converging => ...parts => a => c
 * converging :: (b¹, b²,..., bⁿ) => c
 * parts      :: a => b¹, a => b², ..., a => bⁿ
 * ```
 * -----------------------------------------------------------------------------
 * The __blackbird__ _Combinator_ takes a __converging__ _function_ that
 * accepts _n_ arguments, _n_ _Unary_ function __parts__, and a __value__. It
 * applies the value to each part, and computes a final result by applying
 * the returned values as arguments to the __converging__ function. For example:
 *
 * ```
 * const sum = (...ns) => ns.reduce((a, b) => a + b, 0)
 * const increment = a => a + 1
 * const square = a => a * a
 *
 * blackbird(sum)(increment, square)(3)
 * //> sum(increment(3), square(3))
 * //> sum(3 + 1, 3 * 4)
 * //> sum(4, 9)
 * //> 0 + 4 + 9
 * //> 13
 * ```
 */
export declare function blackbird<A, B, C>(
  converging: Variadic<B[], C>,
  ...parts: Unary<A, B>[]
): (a: A) => C
