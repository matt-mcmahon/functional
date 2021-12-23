"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTo = void 0;
const isDefined_1 = require("./isDefined");
const isNaN_1 = require("./isNaN");
const defaultTo = (a) => (b) => (0, isNaN_1.isNaN)(b) ? a : (0, isDefined_1.isDefined)(b) ? b : a;
exports.defaultTo = defaultTo;
//# sourceMappingURL=defaultTo.js.map