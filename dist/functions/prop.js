"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = void 0;
/**
 * ```
 * prop :: k => a.k => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Returns the value of the given _property_ for the object.
 *
 */
exports.prop = (propertyKey) => (a) => a[propertyKey];
