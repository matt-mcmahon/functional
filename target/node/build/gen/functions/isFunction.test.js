"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const isFunction_1 = require("./isFunction");
describe_1.describe("isFunction", async ({ assert, inspect }) => {
    const expected = true;
    const should = inspect `be a function`;
    {
        const actual = isFunction_1.isFunction(function test() {
            "do nothing";
        });
        const given = inspect `normal function`;
        assert({ actual, expected, given, should });
    }
    {
        const actual = isFunction_1.isFunction(function* test() {
            yield;
        });
        const given = inspect `generator function`;
        assert({ actual, expected, given, should });
    }
    {
        const actual = isFunction_1.isFunction(async function test() {
            "do nothing";
        });
        const given = inspect `async function`;
        assert({ actual, expected, given, should });
    }
    {
        const actual = isFunction_1.isFunction(() => {
            "do nothing";
        });
        const given = inspect `arrow function`;
        assert({ actual, expected, given, should });
    }
    {
        const expected = false;
        const actual = isFunction_1.isFunction(null);
        const given = inspect `the value ${null}`;
        const should = inspect `not be a function`;
        assert({ actual, expected, given, should });
    }
    {
        const expected = false;
        const actual = isFunction_1.isFunction("function");
        const given = inspect `the string ${"function"}`;
        const should = inspect `not be a function`;
        assert({ actual, expected, given, should });
    }
});
//# sourceMappingURL=isFunction.test.js.map