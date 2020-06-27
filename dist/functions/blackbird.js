"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blackbird = void 0;
/**
 * ```
 * blackbird :: ((b¹, b², ..., bⁿ) => c) => (a => b¹, a => b², ..., a => bⁿ) => a => c
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
 *
 * @todo add support for Variadic Tuples in TypeScript 4
 */
exports.blackbird = (converging) => (...parts) => (a) => {
    const bs = parts.map((part) => part(a));
    return converging(...bs);
};
