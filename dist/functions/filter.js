"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
/**
 * ```
 * filter :: (a => Boolean) => as => as
 * ```
 * -----------------------------------------------------------------------------
 * Filters a list, keeping only the values for which the __predicate__ returns
 * _true_.
 *
 */
exports.filter = (p) => (as) => as.filter(p);
