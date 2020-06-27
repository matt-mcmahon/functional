"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const iife_1 = require("./iife");
sign_1.describe("iife", async ({ assert, inspect }) => {
    {
        const f = (a, b, c) => a + b + c;
        const actual = iife_1.iife(f, 1, 3, 5);
        const expected = 9;
        const given = inspect `iife(${f}, ${1}, ${3}, ${5})`;
        const should = inspect `return ${9}`;
        assert({ actual, expected, given, should });
    }
    const fun = (a, b) => {
        const c = a + b;
        return (d) => c + d;
    };
    const add4 = iife_1.iife(fun, 1, 3);
    {
        const actual = typeof add4;
        const expected = "function";
        const given = inspect `fun(${1}, ${3}) returns a function, so`;
        const should = inspect `iife(${fun}, ${1}, ${3})`;
        assert({ actual, expected, given, should });
    }
    {
        const actual = add4(5);
        const expected = 9;
        const given = inspect `add4(${5})`;
        assert({ actual, expected, given });
    }
});
