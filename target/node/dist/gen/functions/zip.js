"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zip = void 0;
const zip = (as) => (bs) => {
    const zipped = [];
    const max = Math.max(as.length, bs.length);
    for (let i = 0; i < max; i++) {
        if (as.length > i) {
            zipped.push(as[i]);
        }
        if (bs.length > i) {
            zipped.push(bs[i]);
        }
    }
    return zipped;
};
exports.zip = zip;
//# sourceMappingURL=zip.js.map