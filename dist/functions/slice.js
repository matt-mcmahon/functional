"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slice = void 0;
/**
 * ```
 * slice->beginning :: n => m => as => as
 * slice->end       ::      m => as => as
 * slice->list      ::           as => as
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns part of an _Iterable_ object, __as__, from the beginning index,
 * __n__, up to but not including the _end_ index, __m__. For example:
 *
 * ```
 * const as = [0, 1, 2, 3, 4]
 * slice(1)(4)(as) <=> as.slice(1, 4) <=> [1, 2, 3]
 * ```
 */
exports.slice = (n) => (m) => (as) => Array.from(as).slice(n, m);
