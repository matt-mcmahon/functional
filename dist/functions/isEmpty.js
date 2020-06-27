"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
/**
 * ```
 * isEmpty :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is an empty value for it's type,
 * `false` otherwise. For example:
 *
 * ```
 * isEmpty("") //> true
 * isEmpty([]) //> true
 * isEmpty({}) //> true
 * isEmpty(0)  //> false
 * ```
 */
exports.isEmpty = (a) => (Array.isArray(a) && a.length === 0) ||
    (typeof a === "string" && a.length === 0) ||
    (typeof a === "object" && a !== null && Object.keys(a).length === 0);
//# sourceMappingURL=isEmpty.js.map