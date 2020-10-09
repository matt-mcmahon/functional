"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cap = void 0;
exports.cap = (word) => typeof word === "string" && word.length > 0
    ? word[0].toLocaleUpperCase() + word.substr(1)
    : word;
//# sourceMappingURL=cap.js.map