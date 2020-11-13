"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const isDefined_1 = require("./isDefined");
describe_1.describe("is-defined", async ({ assert, inspect }) => {
    const data = [
        [null, false],
        [undefined, false],
        [NaN, true],
        ["", true],
        [[], true],
        [false, true],
        [{}, true],
        [{ length: 0 }, true],
    ];
    const test = ([value, expected]) => {
        const actual = isDefined_1.isDefined(value);
        const given = inspect `isDefined(${value})`;
        assert({ given, actual, expected });
    };
    data.forEach(test);
});
describe_1.describe("is-defined, type guard", async ({ assert, inspect }) => {
    const f = (value) => isDefined_1.isDefined(value.a) ? value.a() : "error";
    {
        const expected = "I'm A!";
        const value = { a: () => expected };
        const actual = f(value);
        const given = inspect `{ a: () => ${expected}}`;
        const should = "pass type guard";
        assert({ actual, expected, given, should });
    }
    {
        const expected = "error";
        const value = {};
        const actual = f(value);
        const should = "fail type guard";
        assert({ actual, expected, value, should });
    }
});
//# sourceMappingURL=isDefined.test.js.map