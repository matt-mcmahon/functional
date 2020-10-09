"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
exports.isEmpty = (a) => (Array.isArray(a) && a.length === 0) ||
    (typeof a === "string" && a.length === 0) ||
    (typeof a === "object" && a !== null && Object.keys(a).length === 0);
//# sourceMappingURL=isEmpty.js.map