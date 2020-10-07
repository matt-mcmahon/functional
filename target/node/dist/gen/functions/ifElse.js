"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifElse = void 0;
exports.ifElse = (predicate, whenTrue, whenFalse) => (x) => (predicate(x) ? whenTrue(x) : whenFalse(x));
//# sourceMappingURL=ifElse.js.map