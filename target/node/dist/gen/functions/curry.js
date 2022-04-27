"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry = void 0;
const curryN_1 = require("./curryN");
const curry = (f) => (0, curryN_1.curryN)(f.length)(f);
exports.curry = curry;
//# sourceMappingURL=curry.js.map