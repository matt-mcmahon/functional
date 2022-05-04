import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { isObject } from "./isObject.ts";

Deno.test("isObject", () => {
  const data: [unknown, boolean][] = [
    [1, false],
    [0, false],
    [NaN, false],
    [-Infinity, false],
    [+Infinity, false],
    [undefined, false],
    ["", false],
    [[], true],
    [false, false],
    [{}, true],
    [{ length: 0 }, true],
    [() => {}, false],
  ];

  for (const [value, expected] of data) {
    assertEquals(isObject(value), expected);
  }
});
