"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const isFunction_1 = require("./isFunction");
sign_1.describe("isFunction", async ({ assert, inspect }) => {
    const expected = true;
    const should = inspect `be a function`;
    {
        const actual = isFunction_1.isFunction(function test() { });
        const given = inspect `function test() {}`;
        assert({ actual, expected, given, should });
    }
    {
        const actual = isFunction_1.isFunction(function* test() { });
        const given = inspect `function* test() {}`;
        assert({ actual, expected, given, should });
    }
    {
        const actual = isFunction_1.isFunction(async function test() { });
        const given = inspect `async function test() {}`;
        assert({ actual, expected, given, should });
    }
    {
        const actual = isFunction_1.isFunction(() => { });
        const given = inspect `() => {}`;
        assert({ actual, expected, given, should });
    }
    {
        const expected = false;
        const actual = isFunction_1.isFunction("null");
        const given = inspect `${null}`;
        const should = inspect `not be a function`;
        assert({ actual, expected, given, should });
    }
    {
        const expected = false;
        const actual = isFunction_1.isFunction("function");
        const given = inspect `${"function"}`;
        const should = inspect `not be a function`;
        assert({ actual, expected, given, should });
    }
});
//# sourceMappingURL=isFunction.test.js.map