"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRight = void 0;
const reduceRight = (reducer) => (a) => (bs) => bs.length > 0 ? bs.reduceRight(reducer, a) : a;
exports.reduceRight = reduceRight;
//# sourceMappingURL=reduceRight.js.map