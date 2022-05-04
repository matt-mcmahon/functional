import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { replace } from "./replace.ts";

Deno.test("replace", () => {
  const replaceFoo = replace("foo");
  const replaceFooWithBar = replaceFoo("bar");

  const source = "foo baz bix foo Foo";

  assertEquals(
    replaceFooWithBar(source),
    "bar baz bix foo Foo",
  );

  assertEquals(
    replace(/foo/g)("bar")(source),
    "bar baz bix bar Foo",
  );
});
