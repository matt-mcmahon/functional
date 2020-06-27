"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
const first = (f) => {
    function call(a) {
        return f(a);
    }
    const p = Object.assign(call.bind(null), {
        then: (f) => {
            return next(p, f);
        },
        call,
    });
    return p;
};
exports.pipe = first;
const next = (prev, f) => {
    function call(a) {
        return f(prev(a));
    }
    const p = Object.assign(call.bind(null), {
        then: (f) => {
            return next(p, f);
        },
        call,
    });
    return p;
};
