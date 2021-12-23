"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
function pipe(...fs) {
    return (a) => fs.reduce((v, f) => f(v), a);
}
exports.pipe = pipe;
//# sourceMappingURL=pipe.js.map