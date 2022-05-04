import { assoc } from "./assoc.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.136.0/testing/asserts.ts";

Deno.test("assoc", () => {
  assertEquals(
    assoc("bar")("bar")({ foo: "foo" }),
    { foo: "foo", bar: "bar" },
    `should add property { bar: "bar" }`,
  );

  assertEquals(
    assoc("foo")("bar")({ foo: "foo" }),
    { foo: "bar" },
    `should overwrite property foo with value "bar"`,
  );

  {
    const value: number[] = [];
    const actual = assoc(2)(1)(value);
    assertEquals(
      actual,
      [, , 1],
      `should set an index on an array`,
    );
    assertEquals(
      value,
      [],
      "should not mutate original array",
    );
    assert(value !== actual);
  }
});
