"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curryN = void 0;
const gather = (n, f, previous = []) => {
    const curried = (...as) => {
        const args = [...previous, ...as];
        const remaining = n - args.length;
        return remaining > 0 ? gather(n, f, args) : f(...args.slice(0, n));
    };
    Object.defineProperties(curried, {
        length: { value: n - previous.length },
        name: { value: `${f.name}${previous.length}` },
    });
    return curried;
};
exports.curryN = (n) => (f) => gather(n, f);
//# sourceMappingURL=curryN.js.map