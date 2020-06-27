"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const tail_1 = require("./tail");
sign_1.describe("tail", async ({ assert, inspect }) => {
    {
        const arg = ["a", "b", "c"];
        const expected = ["b", "c"];
        const actual = tail_1.tail(arg);
        const given = inspect `tail(${arg})`;
        const should = inspect `${expected}`;
        assert({ actual, expected, given, should });
    }
    {
        const arg = ["a"];
        const expected = [];
        const actual = tail_1.tail(arg);
        const given = inspect `tail(${arg})`;
        const should = inspect `${expected}`;
        assert({ actual, expected, given, should });
    }
    {
        const arg = [];
        const expected = [];
        const actual = tail_1.tail(arg);
        const given = inspect `tail(${arg})`;
        const should = inspect `${expected}`;
        assert({ actual, expected, given, should });
    }
    {
        const arg = [["a", "b", "c"]];
        const expected = [];
        const actual = tail_1.tail(arg);
        const given = inspect `tail(${arg})`;
        const should = inspect `${expected}`;
        assert({ actual, expected, given, should });
    }
});
//# sourceMappingURL=tail.test.js.map