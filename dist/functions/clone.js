"use strict";
/* eslint-disable @typescript-eslint/ban-types -- WeakMap needs an object type */
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = void 0;
const functions_1 = require("../functions");
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
    const t = functions_1.isDefined(a)
        ? functions_1.isDate(a)
            ? cloneDate(a)
            : functions_1.isArray(a)
                ? cloneArray(a, map)
                : functions_1.isObject(a)
                    ? cloneObject(a, map)
                    : a
        : a;
    return t;
}
/**
 * ```
 * clone :: a => a
 * ```
 * @export
 * @template A
 * @param {A} a
 * @returns {A}
 */
function clone(a) {
    const map = new WeakMap();
    return cloneUnknown(a, map);
}
exports.clone = clone;
