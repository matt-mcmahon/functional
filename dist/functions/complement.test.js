"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const complement_1 = require("./complement");
sign_1.describe("complement", async ({ assert, inspect }) => {
    const something = (v) => !!v;
    const T = () => true;
    const complement0 = complement_1.complement;
    const complement1 = complement0(something);
    const complement2 = complement1(true);
    {
        const given = inspect `complement2`;
        const should = inspect `be the value ${false}`;
        const actual = complement2;
        const expected = false;
        assert({ actual, expected, given, should });
    }
    {
        const given = inspect `complement(${something}) and ${false}`;
        const should = inspect `return !${false}`;
        const actual = complement_1.complement(something)(false);
        const expected = true;
        assert({ actual, expected, given, should });
    }
    {
        const given = inspect `complement(${something}) and something ${"truthy"}`;
        const should = inspect `return ${false}`;
        const actual = complement_1.complement(something)("truthy");
        const expected = false;
        assert({ actual, expected, given, should });
    }
    {
        const given = inspect `${T} and the argument ${false}`;
        const should = inspect `ignore the argument and return !${true}`;
        const actual = complement_1.complement(T)(false);
        const expected = false;
        assert({ actual, expected, given, should });
    }
});
