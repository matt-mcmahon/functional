"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const assoc_1 = require("./assoc");
describe_1.describe("assoc", async ({ assert, inspect }) => {
    {
        const value = { foo: "foo" };
        const a1 = assoc_1.assoc("bar");
        const a2 = a1("bar");
        const actual = a2(value);
        const expected = { foo: "foo", bar: "bar" };
        const given = inspect `we assoc(${"bar"})(${"bar"}) on ${value}`;
        assert({ given, actual, expected });
    }
    {
        const value = { foo: "foo" };
        const a1 = assoc_1.assoc("foo");
        const a2 = a1("bar");
        const actual = a2(value);
        const expected = { foo: "bar" };
        const given = inspect `we assoc(${"foo"})(${"bar"}) on ${value}`;
        assert({ given, actual, expected });
    }
    {
        assert({
            given: inspect `we use assoc to overwrite ${"b"}`,
            actual: assoc_1.assoc("b")(3)({ a: 1, b: 2 }),
            expected: { a: 1, b: 3 },
        });
    }
    {
        const given = inspect `an empty number[] and 2:1`;
        const actual = assoc_1.assoc(2)(1)([]);
        const expected = [, , 1];
        assert({ given, expected, actual });
    }
});
//# sourceMappingURL=assoc.test.js.map