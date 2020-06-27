"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
/**
 * ```
 * isObject :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is callable, `false` otherwise.
 * For example:
 *
 * ```
 * isObject(function() {})    //> true
 * isObject(() => 'function') //> true
 * const object = { method() {} }
 * isObject(object)           //> false
 * isObject(object.method)    //> true
 * isObject(object.method())  //> false
 * ```
 */
exports.isObject = (a) => typeof a === "object";
//# sourceMappingURL=isObject.js.map