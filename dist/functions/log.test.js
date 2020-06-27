"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const log_1 = require("./log");
sign_1.describe("log", async ({ assert, inspect }) => {
    const value = 4;
    const message = inspect `the value is...`;
    const actual = log_1.log(message)(value);
    const expected = value;
    const given = inspect `log(${message})(${value})`;
    const should = inspect `should return ${value}`;
    assert({ actual, expected, given, should });
});
//# sourceMappingURL=log.test.js.map