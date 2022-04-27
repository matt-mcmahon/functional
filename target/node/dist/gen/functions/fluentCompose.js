"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fluentCompose = void 0;
function fluentCompose(f) {
    function invoke(b) {
        return f(b);
    }
    const p = Object.assign(invoke.bind(null), {
        after: (f) => {
            return after(p, f);
        },
        invoke,
    });
    return p;
}
exports.fluentCompose = fluentCompose;
function after(next, f) {
    function invoke(c) {
        return next(f(c));
    }
    const p = Object.assign(invoke.bind(null), {
        after: (f) => after(p, f),
        invoke,
    });
    return p;
}
//# sourceMappingURL=fluentCompose.js.map