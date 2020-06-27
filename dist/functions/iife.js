"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iife = void 0;
/**
 * ```
 * iife :: (...as => b, ...as) => b
 * ```
 * -----------------------------------------------------------------------------
 * Immediately Invokes a function, passing in the supplied parameters and
 * returning the result, if any.
 *
 */
exports.iife = (f, ...as) => f(...as);
//# sourceMappingURL=iife.js.map