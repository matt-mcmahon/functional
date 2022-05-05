import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { isNumber } from "./isNumber.ts";

Deno.test("is-number", () => {
  const data: [unknown, boolean][] = [
    [1, true],
    [0, true],
    [NaN, true],
    [-Infinity, true],
    [+Infinity, true],
    [undefined, false],
    ["", false],
    [[], false],
    [false, false],
    [{}, false],
    [{ length: 0 }, false],
  ];

  for (const [value, expected] of data) {
    assertEquals(isNumber(value), expected);
  }
});
