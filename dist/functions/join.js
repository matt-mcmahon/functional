"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = void 0;
/**
 * ```
 * join:: a => as => a
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a joining value, a list with the a `join(a:A):B` method, and returns B
 *
 */
exports.join = (a) => (as) => as.join(a);
//# sourceMappingURL=join.js.map