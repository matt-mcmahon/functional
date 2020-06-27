"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTo = void 0;
const functions_1 = require("../functions");
/**
 * ```
 * defaultTo :: a => b => a|b
 * ```
 * -----------------------------------------------------------------------------
 *
 * If __b__ is `null`, `undefined`, or `NaN`, return __a__, otherwise return __b__.
 *
 */
exports.defaultTo = (a) => (b) => functions_1.isNaN(b) ? a : functions_1.isDefined(b) ? b : a;
//# sourceMappingURL=defaultTo.js.map