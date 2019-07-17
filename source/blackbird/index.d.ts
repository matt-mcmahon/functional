import { Variadic, Binary, Unary } from "../types"
/**
 * ```
 * blackbird :: ((b, …, y) => z) => (a => b, …, a => y) => a => z
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
export declare function blackbird<T, U>(
  converging: Variadic<any, U>
): (...parts: Unary<T, any>[]) => (value: any) => U
