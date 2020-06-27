"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const both_1 = require("./both");
const functions_1 = require("../functions");
sign_1.describe("both", async ({ assert, inspect }) => {
    const gt10 = (v) => v > 10;
    const lt20 = (v) => v < 20;
    const both0 = both_1.both;
    const both1 = both0(gt10);
    const both2 = both1(lt20);
    const values = [
        [10, false],
        [20, false],
        [19, true],
        [11, true],
    ];
    values.forEach(([value, expected]) => {
        const given = inspect `the value ${value}`;
        const should = inspect `${expected ? "be" : "not be"} between ${10} and ${20}`;
        const actual = both2(value);
        assert({ given, should, actual, expected });
    });
    try {
        const first = (v) => false;
        const second = (v) => {
            throw new Error("both should never execute me");
        };
        both_1.both(first)(second)(true);
    }
    catch (err) {
        assert({
            actual: false,
            expected: true,
            given: `first -> false`,
            should: `not run second`,
        });
    }
    const f = both_1.both(functions_1.isNumber)(functions_1.toString);
    {
        const value = 10;
        const expected = "10";
        assert({ actual: f(value), expected, value });
        assert({ actual: f(10), expected, value });
    }
    {
        const value = "bam";
        const expected = false;
        assert({ actual: f(value), expected, value });
    }
});
//# sourceMappingURL=both.test.js.map