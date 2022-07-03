import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { isBoolean } from "./isBoolean.ts";

Deno.test("is-date", () => {
  const data: [unknown, boolean][] = [
    [true, true],
    [false, true],
    [undefined, false],
    [NaN, false],
    ["", false],
    [[], false],
    [{}, false],
    [{ length: 0 }, false],
  ];

  for (const [value, expected] of data) {
    assertEquals(isBoolean(value), expected);
  }
});
