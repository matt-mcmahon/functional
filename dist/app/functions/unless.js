"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unless = void 0;
const unless = (p) => (mapXB) => (a) => p(a) ? a : mapXB(a);
exports.unless = unless;
//# sourceMappingURL=unless.js.map