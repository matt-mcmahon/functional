"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const concat_1 = require("./concat");
sign_1.describe("slice", async ({ assert, inspect }) => {
    const as = ["a", "b", "c"];
    const bs = ["d", "e", "f"];
    {
        const actual = concat_1.concat(as)(bs);
        const expected = [...as, ...bs];
        const given = inspect `concat(${as})(${bs})`;
        assert({ actual, expected, given });
    }
    {
        const as = ["a", 1, { foo: "bar" }];
        const bs = ["b", { bar: "baz" }];
        const actual = concat_1.concat(as)(bs);
        const expected = [...as, ...bs];
        const given = inspect `concat(${as})(${bs})`;
        assert({ actual, expected, given });
    }
});
//# sourceMappingURL=concat.test.js.map