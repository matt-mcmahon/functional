"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceV = exports.reduce = void 0;
const reduce = (r) => (b) => (as) => as.reduce(r, b);
exports.reduce = reduce;
const reduceV = (r) => (b) => (...as) => as.reduce(r, b);
exports.reduceV = reduceV;
//# sourceMappingURL=reduce.js.map