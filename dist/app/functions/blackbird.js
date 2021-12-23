"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blackbird = void 0;
const blackbird = (converging) => (...parts) => (a) => {
    const bs = parts.map((part) => part(a));
    return converging(...bs);
};
exports.blackbird = blackbird;
//# sourceMappingURL=blackbird.js.map