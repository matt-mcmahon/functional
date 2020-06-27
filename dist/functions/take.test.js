"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const take_1 = require("./take");
sign_1.describe("take", async ({ assert, inspect }) => {
    const [a, b, c, d, e] = ["a", "b", "c", "d", "e"];
    {
        const as = [a, b, c, d, e];
        const actual = take_1.take(3)(as);
        const expected = [a, b, c];
        const given = inspect `take(${3}, ${as})`;
        assert({ given, actual, expected });
    }
    {
        const as = [a, b];
        const actual = take_1.take(4)(as);
        const expected = [a, b];
        const given = inspect `take(${4})(${as})`;
        assert({ given, actual, expected });
    }
});
