"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipeV = void 0;
/**
 * ```
 * pipeV :: (...as) => ((a⁰ => a¹), (a¹ => a²), ..., (aⁿ=> b)) =>  b
 * ```
 *
 * _PipeV_ is a _Variadic_ _Combinator_, that takes a __value__ and one or more
 * _Unary_ __functions__. It _composes_ the functions in left-to-right order —
 * evaluating the first function and applying it's result to the second, it's
 * result to third, etc. — and returns the result of evaluating the final
 * function. E.g.:
 *
 * ```
 * pipeV(v)(f, g, h) <=> h(g(f(v)))
 * ```
 */
exports.pipeV = (...as) => (f, ...fs) => fs.reduce((a, f) => f(a), f(...as));
//# sourceMappingURL=pipeV.js.map