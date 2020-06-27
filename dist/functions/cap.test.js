"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cap_1 = require("./cap");
const sign_1 = require("@mwm/sign");
sign_1.describe("cap", ({ assert, inspect }) => {
    {
        const value = "uncapped";
        const actual = cap_1.cap(value);
        const expected = "Uncapped";
        assert({ given: inspect `${value}`, actual, expected });
    }
    {
        const value = "";
        const actual = cap_1.cap(value);
        const expected = "";
        assert({ given: inspect `${value}`, actual, expected });
    }
});
