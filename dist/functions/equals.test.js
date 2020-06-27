"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const equals_1 = require("./equals");
sign_1.describe("equals", async ({ assert, inspect }) => {
    const values = [
        ["a", "b", false],
        ["a", "a", true],
        [1, 1, true],
        [1, 2, false],
        [NaN, NaN, false],
        [undefined, undefined, true],
        [undefined, null, false],
        [null, null, true],
    ];
    values.forEach(([a, b, expected]) => {
        const actual = equals_1.equals(a)(b);
        const given = inspect `equals(${a}, ${b})`;
        assert({ expected, actual, given });
    });
});
//# sourceMappingURL=equals.test.js.map