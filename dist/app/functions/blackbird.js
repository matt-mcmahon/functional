"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blackbird = void 0;
exports.blackbird = (converging) => (...parts) => (a) => {
    const bs = parts.map((part) => part(a));
    return converging(...bs);
};
