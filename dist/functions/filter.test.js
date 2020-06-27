"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const filter_1 = require("./filter");
sign_1.describe("filter", async ({ assert, inspect }) => {
    const predicate = (n) => n % 2 === 0;
    const evens = filter_1.filter(predicate);
    {
        const expected = [2, 4, 6];
        const actual = evens([1, 2, 3, 4, 5, 6]);
        const given = inspect ``;
        const should = inspect `filter out odd numbers`;
        assert({ expected, actual, given, should });
    }
    {
        const expected = [];
        const actual = evens([]);
        const given = inspect ``;
        const should = inspect `work with an empty iterable.`;
        assert({ expected, actual, given, should });
    }
    {
        const expected = [];
        const actual = evens([1, 3, 5]);
        const given = inspect ``;
        const should = inspect `return an empty array`;
        assert({ expected, actual, given, should });
    }
    {
        const expected = [2, 4, 6];
        const actual = evens([2, 4, 6]);
        const given = inspect ``;
        const should = inspect `be ${expected}, got ${actual}`;
        assert({ expected, actual, given, should });
    }
});
//# sourceMappingURL=filter.test.js.map