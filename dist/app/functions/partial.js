"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partial = void 0;
const partial = (...as) => (f) => (...bs) => f(...as, ...bs);
exports.partial = partial;
//# sourceMappingURL=partial.js.map