"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUnary = void 0;
/**
 * ```
 * toUnary :: (...as => b) => as => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a _Variadic_ function and returns a _Unary_ version of the function
 * that accepts a single array as its argument instead.
 *
 */
function toUnary(v) {
    return (as) => v(...as);
}
exports.toUnary = toUnary;
