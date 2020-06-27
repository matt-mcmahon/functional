"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
/**
 * ```
 * toString :: (as => b) => ...as => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a _Unary_ function that accepts an array as its argument, and returns
 * that accepts any number of arguments instead.
 *
 */
exports.toString = (a) => `${a}`;
