"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
const split = (separator, limit) => (source) => separator == undefined
    ? [source]
    : separator === ""
        ? Array.from(source).slice(0, limit)
        : source.split(separator, limit);
exports.split = split;
//# sourceMappingURL=split.js.map