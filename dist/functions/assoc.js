"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
const functions_1 = require("../functions");
/**
 * ```
 * assoc = k => b => a => {...a, k:b}
 * ```
 * -----------------------------------------------------------------------------
 *
 * Clones the object __a__, associating the key, __k__, with value, __b__.
 *
 * For example:
 *
 * ```
 * a[k] = b <=> assoc(k)(b)(a).
 * ```
 *
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.assoc = (k) => (b) => (a) => Object.assign(functions_1.clone(a), { [k]: b });
