"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry = void 0;
const curryN_1 = require("./curryN");
exports.curry = (f) => curryN_1.curryN(f.length)(f);
