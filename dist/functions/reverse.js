"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
/**
 * ```
 * reverse :: as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns an array created from __`as`__, sorted in reverse order.
 *
 * ```
 * const as = [1, 2, 3]
 * Array.from(as).reverse() <=> reverse(as) <=> [3, 2, 1]
 * ```
 */
exports.reverse = (as) => Array.from(as).reverse();
