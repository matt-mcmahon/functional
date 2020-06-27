"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNil = void 0;
/**
 * ```
 * isNil :: a => boolean
 * ```
 * -----------------------------------------------------------------------------
 * _Predicate_ that returns `true` if __a__ is `null` or `undefined`,
 * `false` otherwise. For example
 *
 * ```
 * isNil(null)      => true
 * isNil(undefined) => true
 * isNil(0)         => false
 * ```
 */
exports.isNil = (a) => a === null || a === undefined;
