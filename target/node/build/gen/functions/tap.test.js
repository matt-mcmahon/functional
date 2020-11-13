"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const tap_1 = require("./tap");
describe_1.describe("tap", async ({ assert, inspect }) => {
    const sideEffect = (x) => x * 2;
    const value = 4;
    const actual = tap_1.tap(sideEffect)(value);
    const expected = value;
    const given = inspect `tap(${sideEffect})(${value})`;
    const should = inspect `return ${value}`;
    assert({ actual, expected, given, should });
});
//# sourceMappingURL=tap.test.js.map