"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const isDate_1 = require("./isDate");
sign_1.describe("is-date", async ({ assert, inspect }) => {
    const data = [
        [new Date(), true],
        [undefined, false],
        [NaN, false],
        ["", false],
        [[], false],
        [false, false],
        [{}, false],
        [{ length: 0 }, false],
    ];
    const test = ([value, expected]) => {
        const actual = isDate_1.isDate(value);
        const given = inspect `isDate(${value})`;
        assert({ given, actual, expected });
    };
    data.forEach(test);
});
