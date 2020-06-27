"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
/**
 * ```
 * log :: s -> a -> a
 * ```
 * -----------------------------------------------------------------------------
 * Takes a string, a _value_, logs the string and the value, and then returns
 * the _value_.
 */
exports.log = (s) => (a) => {
    console.groupCollapsed(s);
    console.log(a);
    console.groupEnd();
    return a;
};
//# sourceMappingURL=log.js.map