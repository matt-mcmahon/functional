"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.both = void 0;
exports.both = (first) => (second) => (a) => first(a) && second(a);
