"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const isString_1 = require("./isString");
sign_1.describe("is-string", async ({ assert, inspect }) => {
    const data = [
        [1, false],
        [0, false],
        [NaN, false],
        [-Infinity, false],
        [+Infinity, false],
        [undefined, false],
        ["", true],
        [[], false],
        [false, false],
        [{}, false],
        [{ length: 0 }, false],
    ];
    const test = ([value, expected]) => {
        const actual = isString_1.isString(value);
        const given = inspect `isString(${value})`;
        assert({ given, actual, expected });
    };
    data.forEach(test);
    {
        const value = {
            valueOf() {
                return "fake v";
            },
            toString() {
                return "fake s";
            },
        };
        const actual = isString_1.isString(value);
        const expected = false;
        const given = `string-like object with valueOf() => string`;
        assert({ actual, expected, value, given });
    }
});
