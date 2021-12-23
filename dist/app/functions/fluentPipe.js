"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fluentPipe = void 0;
function fluentPipe(f) {
    function invoke(a) {
        return f(a);
    }
    const p = Object.assign(invoke.bind(null), {
        then: (f) => next(p, f),
        invoke,
    });
    return p;
}
exports.fluentPipe = fluentPipe;
function next(prev, f) {
    function invoke(a) {
        return f(prev(a));
    }
    const then = (f) => next(p, f);
    const p = Object.assign(invoke.bind(null), {
        invoke,
        then,
    });
    return p;
}
//# sourceMappingURL=fluentPipe.js.map