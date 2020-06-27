"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const not_1 = require("./not");
sign_1.describe("not", async ({ assert, inspect }) => {
    const values = [
        [true, false],
        [false, true],
        // truthy values
        [{}, false],
        ["some string", false],
        [5, false],
        // falsy values
        [0, true],
        [-0, true],
        [+0, true],
        ["", true],
        [``, true],
        [null, true],
        [undefined, true],
        [NaN, true],
    ];
    values.forEach(([value, expected]) => {
        const actual = not_1.not(value);
        const given = inspect `not(${value})`;
        assert({ expected, actual, given });
    });
});
//# sourceMappingURL=not.test.js.map