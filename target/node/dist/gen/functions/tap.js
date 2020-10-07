"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
exports.tap = (f) => (a) => {
    f(a);
    return a;
};
//# sourceMappingURL=tap.js.map