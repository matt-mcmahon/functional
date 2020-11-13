"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.when = void 0;
function when(isOkay) {
    return (mapAB) => {
        return (a) => isOkay(a) ? mapAB(a) : a;
    };
}
exports.when = when;
//# sourceMappingURL=when.js.map