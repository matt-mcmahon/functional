"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const isArray_1 = require("./isArray");
describe_1.describe("is-array", async ({ assert, inspect }) => {
    const data = [
        [null, false],
        [undefined, false],
        [NaN, false],
        ["", false],
        [[], true],
        [false, false],
        [{}, false],
        [{ length: 0 }, false],
    ];
    const test = ([value, expected]) => {
        const actual = isArray_1.isArray(value);
        const given = inspect `isDefined(${value})`;
        assert({ given, actual, expected });
    };
    data.forEach(test);
});
describe_1.describe("is-array, type guard", async ({ assert }) => {
    const f = (value) => (isArray_1.isArray(value) ? "array" : "error");
    {
        const expected = "array";
        const value = [0, 1, 2];
        const actual = f(value);
        const should = "pass type guard";
        assert({ actual, expected, value, should });
    }
    {
        const expected = "error";
        const value = "012";
        const actual = f(value);
        const should = "fail type guard";
        assert({ actual, expected, value, should });
    }
});
//# sourceMappingURL=isArray.test.js.map