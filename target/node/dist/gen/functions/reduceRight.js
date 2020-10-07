"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRight = void 0;
exports.reduceRight = (reducer) => (a) => (bs) => (bs.length > 0 ? bs.reduceRight(reducer, a) : a);
//# sourceMappingURL=reduceRight.js.map