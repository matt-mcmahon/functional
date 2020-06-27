"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const tap_1 = require("./tap");
sign_1.describe("tap", async ({ assert, inspect }) => {
    const sideEffect = (x) => x * 2;
    const value = 4;
    const actual = tap_1.tap(sideEffect)(value);
    const expected = value;
    const given = inspect `tap(${sideEffect})(${value})`;
    const should = inspect `return ${value}`;
    assert({ actual, expected, given, should });
});
