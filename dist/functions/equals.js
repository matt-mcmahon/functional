"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = void 0;
/**
 * ```
 * equals :: a => b => Boolean
 * ```
 * -----------------------------------------------------------------------------
 *
 * __equals__ creates a _Predicate_ that compares the argument, __a__, to the
 * argument, __b__, using the strict-equality operator, i.e.:
 *
 * ```
 * equals(a, b) <=> a === b
 * ```
 *
 */
exports.equals = (a) => (b) => a === b;
