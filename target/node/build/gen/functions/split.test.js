"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const split_1 = require("./split");
describe_1.describe("split", async ({ assert, inspect }) => {
    {
        const value = "one two three";
        const char = " ";
        {
            const expected = value.split(char);
            const actual = split_1.split(char)(value);
            const given = inspect `split(${char})(${value})`;
            assert({ value, expected, actual, given });
        }
        {
            const expected = ["one", "two", "three"];
            const actual = split_1.split(char)(value);
            const given = inspect `split(${char})(${value})`;
            assert({ value, expected, actual, given });
        }
        {
            const limit = 2;
            const actual = split_1.split(char, limit)(value);
            const expected = ["one", "two"];
            const given = inspect `split(${char}, ${limit})(${value})`;
            assert({ value, expected, actual, given });
        }
        {
            const limit = 9;
            const actual = split_1.split(char, limit)(value);
            const expected = ["one", "two", "three"];
            const given = inspect `split(${char}, ${limit})(${value})`;
            assert({ value, expected, actual, given });
        }
        {
            const limit = 0;
            const actual = split_1.split(char, limit)(value).length;
            const expected = 0;
            const given = inspect `split(${char}, ${limit})(${value})`;
            assert({ value, expected, actual, given });
        }
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
        const given = inspect `surrogate pairs, ${value}`;
        const actual = split_1.split(char)(value);
        assert({ value, expected, actual, given });
    }
});
//# sourceMappingURL=split.test.js.map