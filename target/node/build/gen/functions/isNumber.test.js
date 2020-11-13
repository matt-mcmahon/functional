"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const isNumber_1 = require("./isNumber");
describe_1.describe("is-number", async ({ assert, inspect }) => {
    const data = [
        [1, true],
        [0, true],
        [NaN, true],
        [-Infinity, true],
        [+Infinity, true],
        [undefined, false],
        ["", false],
        [[], false],
        [false, false],
        [{}, false],
        [{ length: 0 }, false],
    ];
    const test = ([value, expected]) => {
        const actual = isNumber_1.isNumber(value);
        const given = inspect `isNumber(${value})`;
        assert({ given, actual, expected });
    };
    data.forEach(test);
});
//# sourceMappingURL=isNumber.test.js.map