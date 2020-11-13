"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_1 = require("../../lib/describe");
const replace_1 = require("./replace");
describe_1.describe("replace", async ({ assert, inspect }) => {
    const replaceFoo = replace_1.replace("foo");
    const replaceFooWithBar = replaceFoo("bar");
    const source = "foo baz bix foo Foo";
    const replaced = replaceFooWithBar(source);
    {
        const given = inspect `replaceFooWithBar(${source})`;
        const actual = replaced;
        const expected = "bar baz bix foo Foo";
        assert({ given, actual, expected });
    }
    {
        const given = inspect `${/foo/g}`;
        const should = inspect `replace all ${"foo"}, but not ${"Foo"} in ${source}`;
        const actual = replace_1.replace(/foo/g)("bar")(source);
        const expected = "bar baz bix bar Foo";
        assert({ given, should, actual, expected });
    }
});
//# sourceMappingURL=replace.test.js.map