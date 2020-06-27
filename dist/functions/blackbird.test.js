"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const blackbird_1 = require("./blackbird");
sign_1.describe("blackbird", async ({ assert, inspect }) => {
    // the converging function:
    const converge = (a, b, c) => {
        return inspect `(${a}, ${b}, ${c})`;
    };
    {
        const actual = converge("HELLO", "hello", 5);
        const expected = `("HELLO", "hello", 5)`;
        const given = inspect `converging function`;
        assert({ given, actual, expected });
    }
    const toUpper = (s) => s.toUpperCase();
    const toLower = (s) => s.toLowerCase();
    const toLength = (s) => s.length;
    const blackbird0 = blackbird_1.blackbird;
    const blackbird1 = blackbird0(converge);
    const blackbird2 = blackbird1(toUpper, toLower, toLength);
    {
        const value = "HeLlO";
        const expected = `("HELLO", "hello", 5)`;
        const actual = blackbird2(value);
        const given = inspect `blackbird2(${value})`;
        assert({ given, actual, expected });
    }
});
