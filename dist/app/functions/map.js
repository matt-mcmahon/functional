"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapV = exports.map = void 0;
const map = (ab) => (as) => as.map(ab);
exports.map = map;
const mapV = (ab) => (...as) => as.map(ab);
exports.mapV = mapV;
//# sourceMappingURL=map.js.map