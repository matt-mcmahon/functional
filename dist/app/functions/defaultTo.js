"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTo = void 0;
const isDefined_1 = require("./isDefined");
const isNaN_1 = require("./isNaN");
exports.defaultTo = (a) => (b) => isNaN_1.isNaN(b) ? a : isDefined_1.isDefined(b) ? b : a;
