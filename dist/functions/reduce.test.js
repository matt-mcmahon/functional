"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = require("./reduce");
const sign_1 = require("@mwm/sign");
sign_1.describe("reduce", ({ assert, inspect }) => {
    const as = ["1", "2", "3"];
    const b = 7;
    const bab = (b, a) => b + parseInt(a, 10);
    {
        const f = reduce_1.reduce(bab)(1);
        const actual = f(as);
        const expected = b;
        const given = inspect `reduce(${bab})(${1})(${as})`;
        const should = `accept accept an array`;
        assert({ actual, expected, given, should });
    }
    {
        const f = reduce_1.reduceV(bab)(1);
        const actual = f(...as);
        const expected = b;
        const given = inspect `reduceV(${bab})(${1})(${1}, ${2}, ${3})`;
        const should = `accept multiple arguments`;
        assert({ actual, expected, given, should });
    }
});
