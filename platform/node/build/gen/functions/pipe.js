"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
const fluent = (f) => {
    function invoke(a) {
        return f(a);
    }
    const p = Object.assign(invoke.bind(null), {
        then: (f) => {
            return next(p, f);
        },
        invoke,
    });
    return p;
};
const next = (prev, f) => {
    function invoke(a) {
        return f(prev(a));
    }
    const p = Object.assign(invoke.bind(null), {
        then: (f) => {
            return next(p, f);
        },
        invoke,
    });
    return p;
};
exports.pipe = Object.assign((...fs) => {
    return (a) => fs.reduce((v, f) => f(v), a);
}, { fluent });
//# sourceMappingURL=pipe.js.map