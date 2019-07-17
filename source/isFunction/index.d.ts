import { Predicate } from "../types"
/**
 * ```
 * isFunction :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * __Predicate__ that returns `true` if it's argument is callable,  `false`
 * otherwise. For example:
 *
 * ```
 * isFunction(function() {}) //> true
 * isFunction(() => 'function') //> true
 * isFunction({ method() {} })  //> false
 * ```
 */
export declare const isFunction: Predicate<Function>
