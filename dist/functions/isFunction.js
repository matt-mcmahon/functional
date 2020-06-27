"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
/**
 * ```
 * isFunction :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is callable, `false` otherwise.
 * For example:
 *
 * ```
 * isFunction(function() {})    //> true
 * isFunction(() => 'function') //> true
 * const object = { method() {} }
 * isFunction(object)           //> false
 * isFUnction(object.method)    //> true
 * isFUnction(object.method())  //> false
 * ```
 */
exports.isFunction = (a) => typeof a === "function";
//# sourceMappingURL=isFunction.js.map