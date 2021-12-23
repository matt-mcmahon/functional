"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
const tap = (f) => (a) => {
    f(a);
    return a;
};
exports.tap = tap;
//# sourceMappingURL=tap.js.map