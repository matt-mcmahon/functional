"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry = void 0;
const functions_1 = require("../functions");
/**
 * ```
 * curry :: ((a¹, a²..., aⁿ) => b) => a¹ => a²... => aⁿ => b
 * ```
 * -----------------------------------------------------------------------------
 * Converts a _Variadic_ function into a series of _Unary_ functions that
 * produce the same final value.
 *
 * @todo add support for Variadic Tuples in TypeScript 4
 *
 */
exports.curry = (f) => functions_1.curryN(f.length)(f);
//# sourceMappingURL=curry.js.map