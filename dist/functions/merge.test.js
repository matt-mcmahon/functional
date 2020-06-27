"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const merge_1 = require("./merge");
sign_1.describe("merge", async ({ assert, inspect }) => {
    const first = {
        a: 1,
        b: 1,
    };
    const second = {
        b: 2,
    };
    const merge1 = merge_1.merge(first);
    assert({
        actual: typeof merge1,
        expected: "function",
        given: inspect `merge(${first})`,
        should: "return a partially applied function",
    });
    const actual = merge1(second);
    const expected = {
        a: 1,
        b: 2,
    };
    assert({
        actual,
        expected,
        given: inspect `merge(${first})(${second})`,
        should: inspect `overwrite ${{ b: 1 }} with ${{ b: 2 }}`,
    });
    assert({
        expected,
        actual,
        given: inspect `expanded object`,
        should: inspect `not be the same as the initial object`,
    });
});
