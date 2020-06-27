"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
/**
 * ```
 * merge :: a => b => c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Performs a shallow merge of two objects.
 *
 */
exports.merge = (a) => (b) => Object.assign({}, a, b);
//# sourceMappingURL=merge.js.map