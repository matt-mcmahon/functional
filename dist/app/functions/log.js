"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
exports.log = (s) => (a) => {
    console.groupCollapsed(s);
    console.log(a);
    console.groupEnd();
    return a;
};
