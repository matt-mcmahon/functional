"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
const clone_1 = require("./clone");
exports.assoc = (k) => (b) => (a) => Object.assign(clone_1.clone(a), { [k]: b });
