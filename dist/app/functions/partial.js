"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partial = void 0;
exports.partial = (...as) => (f) => (...bs) => f(...as, ...bs);
