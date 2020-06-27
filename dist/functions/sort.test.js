"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const sort_1 = require("./sort");
sign_1.describe("sort", async ({ assert, inspect }) => {
    const as = [3, 5, 9, 22, 1, 0];
    const bs = [0, 1, 3, 5, 9, 22];
    const fun = sort_1.sort((a, b) => a - b);
    {
        const actual = fun(as);
        const expected = bs;
        const given = inspect `sorting numbers`;
        const should = inspect `${expected}`;
        assert({ actual, expected, given, should });
    }
    {
        const value = [];
        const expected = [];
        const actual = fun(value);
        const given = inspect `fun(${value})`;
        const should = inspect `work with an empty sortable.`;
        assert({ expected, actual, given, should });
    }
});
