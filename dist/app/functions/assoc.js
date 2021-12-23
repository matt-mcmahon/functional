"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
const clone_1 = require("./clone");
const assoc = (k) => (b) => (a) => Object.assign((0, clone_1.clone)(a), { [k]: b });
exports.assoc = assoc;
//# sourceMappingURL=assoc.js.map