"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prop_1 = require("./prop");
const describe_1 = require("../../lib/describe");
describe_1.describe("prop, explicit", async ({ assert, inspect }) => {
    const getA = prop_1.prop("a");
    {
        const value = { a: "A" };
        const actual = getA(value);
        const expected = "A";
        assert({ actual, expected, value });
    }
    {
        const value = { a: "A", b: "B" };
        const actual = getA(value);
        const expected = "A";
        assert({ actual, expected, value });
    }
    {
        const value = { b: "B" };
        const actual = getA(value);
        const expected = undefined;
        const given = inspect `a ${value} without ${{ a: "A" }}`;
        const should = inspect `not compile unless @ts-ignore`;
        assert({ actual, expected, value, given, should });
    }
});
describe_1.describe("prop, inferred", async ({ assert, inspect }) => {
    {
        const expected = 1;
        const value = { a: expected };
        const actual = prop_1.prop("a")(value);
        const given = inspect `get(${"a"})(${value})`;
        assert({ actual, expected, given });
    }
    {
        const expected = "foo";
        const actual = prop_1.prop("foo")({ foo: "foo" });
        const given = inspect `property foo`;
        const should = inspect `${expected}`;
        assert({ actual, expected, given, should });
    }
    {
        const value = 7;
        const expected = "function";
        const actual = typeof prop_1.prop("toString")(value);
        const given = inspect `primitive value ${value}`;
        const should = inspect `find prototype method \`toString\``;
        assert({ actual, expected, given, should });
    }
    {
        const value = "7";
        const expected = "function";
        const actual = typeof prop_1.prop("toString")(value);
        const given = inspect `primitive value ${value}`;
        const should = inspect `find prototype method \`toString\``;
        assert({ actual, expected, given, should });
    }
    {
        const value = { is: 7 };
        const expected = "function";
        const actual = typeof prop_1.prop("toString")(value);
        const given = inspect `primitive value ${value}`;
        const should = inspect `find prototype method \`toString\``;
        assert({ actual, expected, given, should });
    }
});
describe_1.describe("prop, missing propertyKey", async ({ assert, inspect }) => {
    {
        const value = { a: "a" };
        const actual = prop_1.prop("b")(value);
        const expected = undefined;
        const given = inspect `get(${"b"})(${value})`;
        assert({ actual, expected, given });
    }
    {
        const expected = undefined;
        const actual = prop_1.prop("foo")({ bar: "bar" });
        const given = inspect `nonexistant property value`;
        const should = inspect `${expected}`;
        assert({ actual, expected, given, should });
    }
});
//# sourceMappingURL=prop.test.js.map