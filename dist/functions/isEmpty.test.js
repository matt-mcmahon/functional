"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const isEmpty_1 = require("./isEmpty");
sign_1.describe("is-empty", async ({ assert, inspect }) => {
    const data = [
        [null, false],
        [undefined, false],
        ["", true],
        [[], true],
        [{}, true],
        [NaN, false],
        [false, false],
        [{ length: 0 }, false],
    ];
    const test = ([value, expected]) => {
        const actual = isEmpty_1.isEmpty(value);
        const given = inspect `isEmpty(${value})`;
        assert({ given, actual, expected });
    };
    data.forEach(test);
});
//# sourceMappingURL=isEmpty.test.js.map