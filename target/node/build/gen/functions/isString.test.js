"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const isString_1 = require("./isString");
describe_1.describe("is-string", async ({ assert, inspect }) => {
    const data = [
        [1, false],
        [0, false],
        [NaN, false],
        [-Infinity, false],
        [+Infinity, false],
        [undefined, false],
        ["", true],
        [[], false],
        [false, false],
        [{}, false],
        [{ length: 0 }, false],
    ];
    const test = ([value, expected]) => {
        const actual = isString_1.isString(value);
        const given = inspect `isString(${value})`;
        assert({ given, actual, expected });
    };
    data.forEach(test);
});
describe_1.describe("is-string: string-like object", async ({ assert }) => {
    const value = {
        valueOf: () => "fake v",
        toString: () => "fake s",
    };
    {
        const actual = "" + value;
        const expected = "fake v";
        const given = "coerce to value";
        assert({ actual, expected, given });
    }
    {
        const actual = `${value}`;
        const expected = "fake s";
        const given = "coerce to string";
        assert({ actual, expected, given });
    }
    {
        const actual = isString_1.isString(value);
        const expected = false;
        const given = `string-like object with valueOf() => string`;
        assert({ actual, expected, value, given });
    }
});
//# sourceMappingURL=isString.test.js.map