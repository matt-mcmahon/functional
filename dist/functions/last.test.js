"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const last_1 = require("./last");
sign_1.describe("last", async ({ assert, inspect }) => {
    {
        const value = ["a", "b", "c"];
        const expected = "c";
        const actual = last_1.last(value);
        const given = inspect `last(${value})`;
        assert({ given, actual, expected });
    }
    {
        const value = [];
        const expected = undefined;
        const actual = last_1.last(value);
        const given = inspect `last(${value})`;
        assert({ given, actual, expected });
    }
});
