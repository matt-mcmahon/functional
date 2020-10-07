"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.either = void 0;
exports.either = (mapAB) => (mapAC) => (a) => mapAB(a) || mapAC(a);
//# sourceMappingURL=either.js.map