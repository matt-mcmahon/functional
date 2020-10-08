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
    const t = isDefined_1.isDefined(a)
        ? isDate_1.isDate(a)
            ? cloneDate(a)
            : isArray_1.isArray(a)
                ? cloneArray(a, map)
                : isObject_1.isObject(a)
                    ? cloneObject(a, map)
                    : a
        : a;
    return t;
}
function clone(a) {
    const map = new WeakMap();
    return cloneUnknown(a, map);
}
exports.clone = clone;
