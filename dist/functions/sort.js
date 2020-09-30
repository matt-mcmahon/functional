"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
/**
 * ```
 * sort :: ((a, a) => n) => as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Sorts a list by applying the given sorting function.
 *
 */
exports.sort = (compare) => (as) => Array.from(as).sort(compare);
