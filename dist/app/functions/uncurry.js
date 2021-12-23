"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uncurry = void 0;
const applyArgument = (currentStep, a) => currentStep(a);
const uncurry = (length) => (curried) => (...allArguments) => {
    const expectedArguments = allArguments.slice(0, length);
    return expectedArguments.reduce(applyArgument, curried);
};
exports.uncurry = uncurry;
//# sourceMappingURL=uncurry.js.map