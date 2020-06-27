"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.either = void 0;
/**
 * ```
 * either :: (a => b) => (a => c) => a|c
 * ```
 * -----------------------------------------------------------------------------
 *
 * The __either__ combinator creates a _Unary_ from two functions. It returns
 * __b__ from calling `mapAB(a)` if __b__ is truthy. Otherwise, it returns __c__
 * from calling `mapAC(a)`.
 *
 */
exports.either = (mapAB) => (mapAC) => (a) => mapAB(a) || mapAC(a);
