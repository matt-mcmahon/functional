"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const last_1 = require("./last");
describe_1.describe("last", async ({ assert, inspect }) => {
    {
        const value = ["a", "b", "c"];
        const expected = "c";
        const actual = last_1.last(value);
        const given = inspect `last(${value})`;
        assert({ given, actual, expected });
    }
    {
        const value = ["a", 1, "c"];
        const expected = "c";
        const actual = last_1.last(value);
        const given = inspect `mixed array ${value}`;
        assert({ given, actual, expected });
    }
    {
        const value = [];
        const expected = undefined;
        const actual = last_1.last(value);
        const given = inspect `last(${value})`;
        assert({ given, actual, expected });
    }
});
//# sourceMappingURL=last.test.js.map