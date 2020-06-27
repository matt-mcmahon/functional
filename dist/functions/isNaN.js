"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNaN = void 0;
/**
 * ```
 * isNaN :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is the number `NaN`, `false`
 * otherwise.
 */
exports.isNaN = (a) => Number.isNaN(a);
