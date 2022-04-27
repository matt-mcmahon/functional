"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const log = (s) => (a) => {
    console.groupCollapsed(s);
    console.log(a);
    console.groupEnd();
    return a;
};
exports.log = log;
//# sourceMappingURL=log.js.map