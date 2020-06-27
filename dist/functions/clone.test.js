"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("@mwm/sign");
const clone_1 = require("./clone");
sign_1.describe("clone", async ({ assert, inspect }) => {
    const original = { foo: "foo", bar: "bar" };
    const copy = clone_1.clone(original);
    clone_1.clone(original).bar = "BAZ";
    assert({
        actual: original === copy,
        expected: false,
        given: inspect `origin === copy`,
    });
    assert({
        actual: copy === original,
        expected: false,
        given: `original === copy`,
    });
});
sign_1.describe("clone, shallow", async ({ assert, inspect }) => {
    const original = { foo: "foo", bar: "bar" };
    const copy = clone_1.clone(original);
    copy.bar = "BAZ";
    assert({
        actual: original === copy,
        expected: false,
        given: inspect `origin === copy`,
    });
    assert({ actual: original, expected: { foo: "foo", bar: "bar" } });
    assert({ actual: copy, expected: { foo: "foo", bar: "BAZ" } });
});
sign_1.describe("clone, deep", async ({ assert, inspect }) => {
    const original = { foo: "foo", bar: { baz: "baz" } };
    const copy = clone_1.clone(original);
    copy.bar.baz = "BAZ";
    assert({
        actual: original === copy,
        expected: false,
        given: inspect `origin === copy`,
    });
    assert({ actual: original, expected: { foo: "foo", bar: { baz: "baz" } } });
    assert({ actual: copy, expected: { foo: "foo", bar: { baz: "BAZ" } } });
});
sign_1.describe("clone, undefined", async ({ assert, inspect }) => {
    const value = undefined;
    const original = { foo: "foo" };
    const copy = clone_1.clone(original);
    copy.bar = "bar";
    assert({ actual: clone_1.clone(value), expected: value });
    assert({ actual: original, expected: { foo: "foo" } });
    assert({ actual: copy, expected: { foo: "foo", bar: "bar" } });
});
sign_1.describe("clone, null", async ({ assert, inspect }) => {
    const value = null;
    const original = {
        foo: "foo",
        bar: null,
    };
    const copy = clone_1.clone(original);
    copy.bar = "bar";
    assert({ actual: clone_1.clone(value), expected: value });
    assert({ actual: original, expected: { foo: "foo", bar: null } });
    assert({ actual: copy, expected: { foo: "foo", bar: "bar" } });
});
sign_1.describe("clone, date", async ({ assert, inspect }) => {
    const original = new Date(Date.now());
    const copy = clone_1.clone(original);
    assert({
        actual: original === copy,
        expected: false,
        given: inspect `origin === copy`,
    });
    assert({ actual: copy, expected: original });
    assert({
        given: inspect `${copy} instanceof Date?`,
        actual: copy instanceof Date,
        expected: true,
    });
});
sign_1.describe("clone, array", async ({ assert, inspect }) => {
    const original = [1, 2, 3];
    const copy = clone_1.clone(original);
    assert({
        actual: original === copy,
        expected: false,
        given: inspect `origin === copy`,
    });
    assert({ actual: copy, expected: original });
    assert({
        actual: Array.isArray(copy),
        expected: true,
        given: `copy of array is array`,
    });
});
sign_1.describe("clone, recursive", async ({ assert, inspect }) => {
    const a = {};
    a.a = a;
    const original = [a];
    original.push(original);
    const copy = clone_1.clone(original);
    assert({
        actual: original === copy,
        expected: false,
        given: inspect `original === copy`,
        should: `clone should be a new object`,
    });
    //@todo deno doesn't appear to use recursion safe deep equal check
    // assert({
    //   actual: copy,
    //   expected: original,
    //   given: `recursive structure`,
    //   should: `clone`,
    // });
});
