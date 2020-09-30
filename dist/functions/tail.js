"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tail = void 0;
/**
 * ```
 * tail :: as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the portion of an array not including the first element.
 *
 */
exports.tail = ([, ...as]) => as;
