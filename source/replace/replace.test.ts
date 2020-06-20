import { describe } from "../../lib/describe.ts";
import { replace } from "./replace.ts";

describe("source/replace.ts", async ({ assert, inspect }) => {
  const replaceFoo = replace("foo");
  const replaceFooWithBar = replaceFoo("bar");
  const source = "foo baz bix foo Foo";
  const replaced = replaceFooWithBar(source);
  {
    const given = inspect`replaceFooWithBar(${source})`;
    const actual = replaced;
    const expected = "bar baz bix foo Foo";
    assert({ given, actual, expected });
  }

  {
    const given = inspect`${/foo/g}`;
    const should = inspect`replace all ${"foo"}, but not ${"Foo"} in ${source}`;
    const actual = replace(/foo/g)("bar")(source);
    const expected = "bar baz bix bar Foo";
    assert({ given, should, actual, expected });
  }
});
