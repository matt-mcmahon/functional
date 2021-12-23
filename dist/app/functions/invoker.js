"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoker = void 0;
const invoker = (k) => (...as) => (c) => c[k](...as);
exports.invoker = invoker;
//# sourceMappingURL=invoker.js.map