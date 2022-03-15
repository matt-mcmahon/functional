"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow = void 0;
function flow(f) {
    const map = (f) => next(p, f);
    const invoke = (a) => f(a);
    const invoker = () => invoke;
    const p = Object.assign(invoke.bind(null), {
        invoke,
        invoker,
        map,
        then: map,
    });
    return p;
}
exports.flow = flow;
function next(prev, f) {
    const invoke = (a) => f(prev(a));
    const map = (f) => next(p, f);
    const invoker = () => invoke;
    const p = Object.assign(invoke.bind(null), {
        invoke,
        invoker,
        map,
        then: map,
    });
    return p;
}
//# sourceMappingURL=flow.js.map