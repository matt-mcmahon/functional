"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
const isEmpty = (a) => a instanceof Map
    ? a.size === 0
    : a instanceof Set
        ? a.size === 0
        : isCountable(a)
            ? a.length === 0
            : typeof a === "object" && a !== null && Object.keys(a).length === 0;
exports.isEmpty = isEmpty;
function isCountable(a) {
    if (a != null) {
        const descriptor = Object.getOwnPropertyDescriptor(a, "length");
        if ((descriptor === null || descriptor === void 0 ? void 0 : descriptor.enumerable) === false) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=isEmpty.js.map