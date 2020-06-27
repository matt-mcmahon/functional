"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const toString_1 = require("./toString");
sign_1.describe("to-string", async ({ assert, inspect }) => {
    const data = [
        [1, "1"],
        [0, "0"],
        [NaN, "NaN"],
        [-Infinity, "-Infinity"],
        [+Infinity, "Infinity"],
        [undefined, "undefined"],
        ["", ""],
        [[], ""],
        [[1, 2, 3], "1,2,3"],
        [false, "false"],
        [{}, "[object Object]"],
        [
            {
                value: "custom toString",
                toString() {
                    return this.value;
                },
            },
            "custom toString",
        ],
    ];
    const test = ([value, expected]) => {
        const actual = toString_1.toString(value);
        const given = inspect `toString(${value})`;
        assert({ given, actual, expected });
    };
    data.forEach(test);
});
