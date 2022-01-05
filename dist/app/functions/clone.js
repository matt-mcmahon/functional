"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = void 0;
const isArray_1 = require("./isArray");
const isDate_1 = require("./isDate");
const isObject_1 = require("./isObject");
const isDefined_1 = require("./isDefined");
function cloneObject(a, map) {
    if (map.has(a)) {
        return map.get(a);
    }
    else {
        const clone = {};
        map.set(a, clone);
        Object.entries(a).reduce((clone, [key, value]) => {
            return Object.assign(clone, { [key]: cloneUnknown(value, map) });
        }, clone);
        return clone;
    }
}
function cloneDate(a) {
    return new Date(a.valueOf());
}
function cloneArray(a, map) {
    if (map.has(a)) {
        return map.get(a);
    }
    else {
        const clone = [];
        map.set(a, clone);
        return a.reduce((clone, v) => {
            clone.push(cloneUnknown(v, map));
            return clone;
        }, clone);
    }
}
function cloneUnknown(a, map) {
    const t = (0, isDefined_1.isDefined)(a)
        ? (0, isDate_1.isDate)(a)
            ? cloneDate(a)
            : (0, isArray_1.isArray)(a)
                ? cloneArray(a, map)
                : (0, isObject_1.isObject)(a)
                    ? cloneObject(a, map)
                    : a
        : a;
    return t;
}
const clone = (a) => cloneUnknown(a, new WeakMap());
exports.clone = clone;
//# sourceMappingURL=clone.js.map