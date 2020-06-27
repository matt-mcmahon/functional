"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const split_1 = require("./split");
sign_1.describe("split", async ({ assert, inspect }) => {
    {
        const value = "one two three";
        const char = " ";
        const expected = value.split(char);
        const actual = split_1.split(char)(value);
        const given = inspect `split(${char})(${value})`;
        assert({ value, expected, actual, given });
    }
    {
        const value = "one, two, three";
        const char = ", ";
        const expected = value.split(char);
        const actual = split_1.split(char)(value);
        const given = inspect `split(${char})(${value})`;
        assert({ value, expected, actual, given });
    }
    {
        const value = "one two three";
        const char = "-";
        const expected = value.split(char);
        const actual = split_1.split(char)(value);
        const given = inspect `split(${char})(${value})`;
        assert({ value, expected, actual, given });
    }
    {
        const value = "one two three";
        const char = "";
        const expected = value.split(char);
        const actual = split_1.split(char)(value);
        const given = inspect `split(${char})(${value})`;
        assert({ value, expected, actual, given });
    }
    {
        const value = "one two three";
        const expected = [value];
        const actual = split_1.split()(value);
        const given = inspect `split()(${value})`;
        assert({ value, expected, actual, given });
    }
    {
        const value = "";
        const char = " ";
        const expected = value.split(char);
        const actual = split_1.split(char)(value);
        const given = inspect `split(${char})(${value})`;
        const should = inspect `return an empty string`;
        assert({ value, expected, actual, given, should });
    }
    {
        const value = "";
        const char = "";
        const expected = [];
        const actual = split_1.split(char)(value);
        const given = inspect `split(${char})(${value})`;
        const should = inspect `return an empty array`;
        assert({ value, expected, actual, given, should });
    }
    {
        const value = "𝟘𝟙𝟚𝟛";
        const char = "";
        const expected = ["𝟘", "𝟙", "𝟚", "𝟛"];
        const actual = split_1.split(char)(value);
        assert({ value, expected, actual });
    }
});
//# sourceMappingURL=split.test.js.map