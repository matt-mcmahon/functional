"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const not_1 = require("./not");
describe_1.describe("not", async ({ assert, inspect }) => {
    const values = [
        [true, false],
        [false, true],
        [{}, false],
        ["some string", false],
        [5, false],
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