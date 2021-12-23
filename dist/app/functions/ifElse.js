"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifElse = void 0;
const ifElse = (predicate, whenTrue, whenFalse) => (x) => predicate(x) ? whenTrue(x) : whenFalse(x);
exports.ifElse = ifElse;
//# sourceMappingURL=ifElse.js.map