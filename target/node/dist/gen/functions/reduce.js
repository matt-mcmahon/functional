"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceV = exports.reduce = void 0;
exports.reduce = (r) => (b) => (as) => as.reduce(r, b);
exports.reduceV = (r) => (b) => (...as) => as.reduce(r, b);
//# sourceMappingURL=reduce.js.map