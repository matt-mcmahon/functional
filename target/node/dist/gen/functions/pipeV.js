"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipeV = void 0;
const pipeV = (...as) => (f, ...fs) => fs.reduce((a, f) => f(a), f(...as));
exports.pipeV = pipeV;
//# sourceMappingURL=pipeV.js.map