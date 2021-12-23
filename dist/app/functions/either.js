"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.either = void 0;
const either = (mapAB) => (mapAC) => (a) => mapAB(a) || mapAC(a);
exports.either = either;
//# sourceMappingURL=either.js.map