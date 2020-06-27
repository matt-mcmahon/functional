"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const trim_1 = require("./trim");
sign_1.describe("trim", async ({ assert, inspect }) => {
    {
        const value = "  \n   foo  \n   ";
        const expected = "foo";
        const actual = trim_1.trim(value);
        const given = inspect `trim(${value})`;
        assert({ expected, actual, given });
    }
    {
        const value = "  \n   foo    bar  \n   ";
        const expected = "foo    bar";
        const actual = trim_1.trim(value);
        const given = inspect `trim(${value})`;
        assert({ expected, actual, given });
    }
});
