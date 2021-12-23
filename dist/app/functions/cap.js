"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cap = void 0;
const cap = (word) => typeof word === "string" && word.length > 0
    ? word[0].toLocaleUpperCase() + word.substr(1)
    : word;
exports.cap = cap;
//# sourceMappingURL=cap.js.map