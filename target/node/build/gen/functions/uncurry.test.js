"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const uncurry_1 = require("./uncurry");
describe_1.describe("uncurry", async ({ assert, inspect }) => {
    {
        const curried = (x) => (y) => (z) => x + y + z;
        const variadic = uncurry_1.uncurry(3)(curried);
        const expected = curried(1)(2)(3);
        const actual = variadic(1, 2, 3);
        const given = `uncurry(${3})(x => y => z => x + y + z)`;
        const should = inspect `be "${expected}", got "${actual}"`;
        assert({ expected, actual, given, should });
    }
    {
        const curried = (n) => (a) => a.repeat(n);
        const variadic = uncurry_1.uncurry(2)(curried);
        const expected = curried(1)("baa ");
        const actual = variadic(1, "baa ");
        const given = `uncurry(${3})(x => y => z => x + y + z)`;
        const should = inspect `be "${expected}", got "${actual}"`;
        assert({ expected, actual, given, should });
    }
});
//# sourceMappingURL=uncurry.test.js.map