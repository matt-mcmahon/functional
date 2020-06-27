"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
/**
 * ```
 * tap :: (a -> *) -> a -> a
 * ```
 * -----------------------------------------------------------------------------
 * Takes a function, a _value_, and applies the value to the function for it's
 * _sideEffect_. Ignores any value returned by the side effect function, and
 * returns the _value_ instead.
 */
exports.tap = (f) => (a) => {
    f(a);
    return a;
};
//# sourceMappingURL=tap.js.map