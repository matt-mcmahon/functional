"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const trim_1 = require("./trim");
describe_1.describe("trim", async ({ assert, inspect }) => {
    {
        const value = "  \n   foo  \n   ";
        const expected = "foo";
        const actual = trim_1.trim(value);
        const given = inspect `trim(${value})`;
        assert({ expected, actual, given });
    }
    {
        const value = "  \n   foo    bar  \n   ";
        const expected = "foo    bar";
        const actual = trim_1.trim(value);
        const given = inspect `trim(${value})`;
        assert({ expected, actual, given });
    }
});
//# sourceMappingURL=trim.test.js.map