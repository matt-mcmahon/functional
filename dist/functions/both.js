"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.both = void 0;
/**
 * ```
 * both :: (a => b) => (a => c) => a => b|c
 * ```
 * -----------------------------------------------------------------------------
 * Returns the result of calling the first Predicate if `mapAB(a) == false`,
 * otherwise returns `mapAC(a)`.
 *
 */
exports.both = (first) => (second) => (a) => first(a) && second(a);
