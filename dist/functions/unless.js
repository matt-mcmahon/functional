"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unless = void 0;
/**
 * ```
 * unless :: (a => boolean) => (a => b) => a => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Return `a => b` __unless__ the `a => boolean` is `true`, in that case return
 * `a`.
 */
exports.unless = (p) => (mapXB) => (a) => (p(a) ? a : mapXB(a));
//# sourceMappingURL=unless.js.map