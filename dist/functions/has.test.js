"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const has_1 = require("./has");
const functions_1 = require("../functions");
sign_1.describe("has", ({ assert, inspect }) => {
    const ownFoo = has_1.has("foo");
    {
        const actual = typeof ownFoo;
        const expected = "function";
        const message = `typeof ownFoo is "${expected}"`;
        assert({ actual, expected, message });
    }
    {
        const actual = ownFoo({ foo: "foo" });
        const expected = true;
        const message = `{ foo: "foo"} should own "foo"`;
        assert({ actual, expected, message });
    }
    {
        const actual = has_1.has("bar")({ foo: "foo" });
        const expected = false;
        const message = `{ foo: "foo"} should NOT own "bar"`;
        assert({ actual, expected, message });
    }
    {
        const actual = has_1.has("toString")({ foo: "foo" });
        const expected = false;
        const message = `{ foo: "foo"} should NOT own "toString"`;
        assert({ actual, expected, message });
    }
    {
        const actual = has_1.has("foo")(7);
        const expected = false;
        const given = inspect `primitive value ${7}`;
        assert({ actual, expected, given });
    }
    {
        const a = { a: "a" };
        const b = { b: "b" };
        const hasA = has_1.has("a");
        const hasB = has_1.has("b");
        {
            const actual = hasA(a);
            const given = inspect `${a}`;
            const should = inspect `have own property ${"a"}`;
            const expected = true;
            assert({ actual, expected, given, should });
        }
        {
            const given = inspect `${b}`;
            const should = inspect `have own property ${"b"}`;
            const actual = hasB(b);
            const expected = true;
            assert({ given, expected, should, actual });
        }
        const iOfB = Object.create(b);
        iOfB.a = "a";
        const eg = {
            a: "a",
            prototype: {
                b: "b",
            },
        };
        {
            const given = inspect `instance of ${eg}`;
            const should = inspect `have own property ${"a"}`;
            const actual = hasA(iOfB);
            const expected = true;
            assert({ given, expected, should, actual });
        }
        {
            const given = inspect `instance of ${eg}`;
            const should = inspect `not have own property ${"b"}`;
            const actual = hasB(iOfB);
            const expected = false;
            assert({ given, expected, should, actual });
        }
    }
});
sign_1.describe("has, type guard", async ({ assert, inspect }) => {
    const hasA = has_1.has("a");
    {
        const empty = {};
        const value = { a: "has a" };
        const actual = hasA(value) ? functions_1.prop("a")(value) : "no a";
        const expected = "has a";
        const given = inspect `property "a" hidden from compiler`;
        const should = inspect `allow through guard`;
        assert({ actual, expected, value, given, should });
    }
    {
        const value = { b: "B" };
        const actual = hasA(value) ? functions_1.prop("a")(value) : "no a";
        const expected = "no a";
        const given = inspect `no property "a"`;
        const should = inspect `block`;
        assert({ actual, expected, value, given, should });
    }
});
