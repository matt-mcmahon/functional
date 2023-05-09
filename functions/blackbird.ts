/**
 * ```haskell
 * blackbird :: ((b¹, b², ..., bⁿ) => c) => (a => b¹, a => b², ..., a => bⁿ) => a => c
 * ```
 * -----------------------------------------------------------------------------
 *
 * The __blackbird__ _Combinator_ takes a __converging__ _function_ that accepts _n_ arguments, _n_ _Unary_ function __parts__, and a __value__. It applies the value to each part, and computes a final result by applying the returned values as arguments to the __converging__ function.
 *
 * @param converging - n-array function where __n__ equals the length of __parts__
 * @param parts - __n__ unary functions that accept __a__ as an argument and return a compatible argument to __converging__
 *
 * @param a - the value to pass to each function __parts__
 *
 * @example
 * ```js
 * const sum = (...ns) => ns.reduce((a, b) => a + b, 0)
 * const increment = a => a + 1
 * const square = a => a * a
 *
 * blackbird(sum)(increment, square)(3) //-> 13
 *
 * // is equivalent to
 *
 * sum(increment(3), square(3))
 * sum(3 + 1, 3 * 3)
 * sum(4, 9)
 * 4 + 9
 * //-> 13
 * ```
 *
 * @todo add support for Variadic Tuples in TypeScript 4
 * @todo remove file allow-any pragma
 */
export const blackbird =
  <BS extends unknown[], C>(converging: (...bs: BS) => C) =>
  <A>(...parts: ((a: A) => unknown)[]) =>
  (a: A): C => {
    const bs = parts.map((part: (a: A) => unknown) => part(a)) as BS;
    return converging(...bs);
  };
