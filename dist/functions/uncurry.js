"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uncurry = void 0;
const applyArgument = (currentStep, a) => currentStep(a);
/**
 * ```
 * uncurry :: n => (a¹ => a² => ... => aⁿ => b) => (a¹, a², ..., aⁿ) => b
 * ```
 * -----------------------------------------------------------------------------
 *
 * Takes a length, _n_, a _curried_ function with _n_ productions, and returns a
 * function that accepts _n_ arguments.
 *
 * ```
 * uncurry(3, a => b => c => a + b + c) <=> (a, b, c) => a + b + c
 * ```
 * @todo add support for Variadic Tuples in TypeScript 4
 */
exports.uncurry = (length) => (curried) => (...allArguments) => {
    const expectedArguments = allArguments.slice(0, length);
    return expectedArguments.reduce(applyArgument, curried);
};
//# sourceMappingURL=uncurry.js.map