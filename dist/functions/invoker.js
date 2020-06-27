"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoker = void 0;
/**
 * ```
 * invoker :: k => (...as) => (b.k => c) => c
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a method name, __k__; one or more arguments, __as__; and an object,
 * __b__, which has a method of name __k__. It invokes the method, applying
 * __as__ as arguments, and returns the result, __c__; i.e.:
 *
 * ```
 * invoker(k, ...as, b) <=> b[k](...as) <=>
 * ```
 * @todo Add support for Variadic Tuples when TypeScript 4 is released.
 */
exports.invoker = (propertyKey) => (...args) => (a) => a[propertyKey](...args);
