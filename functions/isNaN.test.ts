import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { isNaN } from "./isNaN.ts";

Deno.test("isNaN", () => {
  const data: [unknown, boolean][] = [
    [null, false],
    [undefined, false],
    [NaN, true],
    [0, false],
    [[], false],
    ["", false],
    [false, false],
    [true, false],
    ["truthy", false],
  ];

  for (const [value, expected] of data) {
    assertEquals(isNaN(value), expected);
  }
});
