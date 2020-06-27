"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partial = void 0;
/**
 * ```
 * partial :: (a¹, a², …, aⁿ => b) => (a¹, …) => ... => (…, aⁿ) => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Creates a version of the supplied _n_-ary function that can be be partially
 * applied.
 *
 * @todo add support for Variadic Tuples in TypeScript 4
 */
exports.partial = (f) => function g(...as) {
    const signatures = [{ [`${f.name}${as.length} :: ...as => b`]: Infinity }];
    return as.length < f.length
        ? (...bs) => g(...as, ...bs)
        : f(...as);
};
//# sourceMappingURL=partial.js.map