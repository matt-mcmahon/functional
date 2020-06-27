"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRight = void 0;
/**
 * ```
 * reduceRight :: ((a, b) => a) => a => [bⁿ, ..., b², b¹, b⁰] => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * __reduceRight__ is a _Unary_ _Combinator_, that reduces an _Array_, in
 * last-to-first order, to a single value. It does this by passing an initial
 * value, the _accumulator_ and the last value of the _Array_, to _reducer_
 * function. The return value for that call is used as the accumulator for the
 * next iteration.
 *
 */
exports.reduceRight = (reducer) => (a) => (bs) => (bs.length > 0 ? bs.reduceRight(reducer, a) : a);
//# sourceMappingURL=reduceRight.js.map