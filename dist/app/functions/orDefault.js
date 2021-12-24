"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orDefault = void 0;
const orDefault = (defaultValue) => (value) => value !== null && value !== void 0 ? value : defaultValue;
exports.orDefault = orDefault;
//# sourceMappingURL=orDefault.js.map