"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bind = void 0;
/**
 * ```
 * bind :: (...as => b) => o => ...as => b
 * ```
 * -----------------------------------------------------------------------------
 * Creates a new _Function_ that binds a __method__ to a __context__.
 *
 * @param method a function that depends on a dynamic `this` context
 * @param object the method's context
 */
exports.bind = (m) => (b) => m.bind(b);
