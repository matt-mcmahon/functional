"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const invoker_1 = require("./invoker");
// cSpell:ignore ghijklm abcdefghijklm
sign_1.describe("invoker", async ({ assert, inspect }) => {
    const target = "abcdefghijklm";
    {
        const sliceFrom = invoker_1.invoker("slice");
        const expected = "ghijklm";
        const actual = sliceFrom(6)(target);
        const given = inspect `invoker(${"slice"})(${6})(${"target"})`;
        assert({ expected, actual, given });
    }
    {
        const sliceFrom = invoker_1.invoker("slice")(6, 8);
        const expected = "gh";
        const actual = sliceFrom(target);
        const given = inspect `invoker(${"slice"})(${6}, ${8})(${target})`;
        assert({ expected, actual, given });
    }
    {
        const o = {
            x: 1,
            sumX(x2, x3, x4, x5 = 0) {
                return this.x + x2 + x3 + x4 + x5;
            },
        };
        const given = inspect `
          invoker(${3})(${"sumX"})(${2}, ${3}, ${4}, ${5})({ x, sumX })
        `.trim();
        const actual = invoker_1.invoker("sumX")(2, 3, 4)(o);
        const expected = 1 + 2 + 3 + 4;
        const should = inspect `sum o.x with args[${0}, ${1}, ${2}]`;
        assert({ given, actual, expected, should });
    }
});
//# sourceMappingURL=invoker.test.js.map