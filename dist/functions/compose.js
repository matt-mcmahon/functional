"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
const last = (f) => {
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
exports.compose = last;
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
//# sourceMappingURL=compose.js.map