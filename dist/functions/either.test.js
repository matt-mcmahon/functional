"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const either_1 = require("./either");
const functions_1 = require("../functions");
sign_1.describe("either", async ({ assert, inspect }) => {
    const max = 10;
    const gt10 = (x) => x > max;
    const even = (x) => x % 2 === 0;
    const f = either_1.either(gt10)(even);
    {
        const value = 101;
        const expected = true;
        const actual = f(value);
        const given = inspect `${value} > ${max}`;
        assert({ actual, expected, given });
    }
    {
        const expected = true;
        const actual = f(8);
        const given = inspect ``;
        const should = inspect `true because 8 is even, got "${actual}"`;
        assert({ expected, actual, given, should });
    }
    {
        const value = 8;
        const expected = true;
        const actual = f(value);
        const given = inspect `${value} is even`;
        assert({ actual, expected, given });
    }
    {
        const value = 7;
        const expected = false;
        const actual = f(value);
        const given = inspect `${value} < ${max} and is odd`;
        assert({ actual, expected, given });
    }
    {
        const throws = () => {
            throw new Error("either should not execute me");
        };
        const plan = {
            expected: true,
            given: inspect `first predicate always returns true`,
            should: inspect `not execute ${throws}`,
        };
        try {
            const actual = either_1.either(functions_1.T)(throws)("anything");
            assert({ ...plan, actual });
        }
        catch (err) {
            assert({ ...plan, actual: false });
        }
    }
});
//# sourceMappingURL=either.test.js.map