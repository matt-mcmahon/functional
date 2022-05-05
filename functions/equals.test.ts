import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { equals } from "./equals.ts";

Deno.test("equals", () => {
  const values: [unknown, unknown, boolean][] = [
    ["a", "b", false],
    ["a", "a", true],
    [1, 1, true],
    [1, 2, false],
    [NaN, NaN, false],
    [undefined, undefined, true],
    [undefined, null, false],
    [null, null, true],
  ];

  for (const [a, b, expected] of values) {
    assertEquals(equals(a)(b), expected);
  }
});
