"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
const functions_1 = require("../functions");
/**
 * ```
 * assoc = (k, i?) => a => b => {...b, [k]:a}
 * ```
 * -----------------------------------------------------------------------------
 *
 * Clones the object __b__, associating the key, __k__, with value, __b__.
 * Accepts an optional type-instance example, __i__, which is used to infer
 * typings for the final object.
 *
 * For example:
 *
 * ```
 * b[k] = a <=> assoc(k, a, b).
 * ```
 *
 */
exports.assoc = (key, i) => (b) => (a) => Object.assign(functions_1.clone(a), { [key]: b });
