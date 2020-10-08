"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
const fluent = (f) => {
    function call(b) {
        return f(b);
    }
    const p = Object.assign(call.bind(null), {
        from: (f) => {
            return after(p, f);
        },
        call,
    });
    return p;
};
const after = (next, f) => {
    function call(c) {
        return next(f(c));
    }
    const p = Object.assign(call.bind(null), {
        from: (f) => {
            return after(p, f);
        },
        call,
    });
    return p;
};
exports.compose = Object.assign((...fs) => {
    return (a) => fs.reduceRight((v, f) => f(v), a);
}, { fluent });
