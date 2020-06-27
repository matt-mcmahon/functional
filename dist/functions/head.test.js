"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const head_1 = require("./head");
sign_1.describe("head", async ({ assert, inspect }) => {
    const as = ["a", "b", "c"];
    {
        const given = inspect `head(${as})`;
        const actual = head_1.head(as);
        const expected = "a";
        assert({ given, actual, expected });
    }
    {
        const given = inspect `an empty list, ${[]}`;
        const actual = head_1.head([]);
        const expected = undefined;
        assert({ given, actual, expected });
    }
});
