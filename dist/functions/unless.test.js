"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const unless_1 = require("./unless");
sign_1.describe("unless", async ({ assert, inspect }) => {
    const isA = (v) => v === "A";
    const makeB = (v) => "B";
    const unless_isA_makeB = unless_1.unless(isA)(makeB);
    {
        const value = "C";
        const expected = "B";
        const actual = unless_isA_makeB(value);
        const given = inspect `make_B_unless_is_A(${value})`;
        assert({ expected, actual, given });
    }
    {
        const value = "A";
        const expected = "A";
        const actual = unless_isA_makeB(value);
        const given = inspect `make_B_unless_is_A(${value})`;
        assert({ expected, actual, given });
    }
    const inc = (n) => n + 1;
    const isNotSafe = (n) => n >= Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER;
    const unlessNotSafe = unless_1.unless(isNotSafe);
    const saferInc = unlessNotSafe(inc);
    {
        const value = Number.MAX_SAFE_INTEGER;
        const expected = value;
        const actual = saferInc(value);
        const given = inspect `saferInc(${value})`;
        assert({ expected, actual, given });
    }
    {
        const value = 1;
        const expected = 2;
        const actual = saferInc(value);
        const given = inspect `saferInc(${value})`;
        assert({ expected, actual, given });
    }
});
