"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
function compose(...fs) {
    return (a) => fs.reduceRight((v, f) => f(v), a);
}
exports.compose = compose;
//# sourceMappingURL=compose.js.map