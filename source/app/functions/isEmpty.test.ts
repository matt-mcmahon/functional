import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { isEmpty } from "./isEmpty.ts";

Deno.test("is-empty", () => {
  const data: [unknown, boolean][] = [
    [null, false],
    [undefined, false],
    ["", true],
    [[], true],
    [{}, true],
    [NaN, false],
    [false, false],
    [{ length: 0 }, false],
    [new Set(), true],
    [new Set([1]), false],
    [new Map(), true],
    [new Map([["a", 1]]), false],
  ];

  for (const [value, expected] of data) {
    assertEquals(isEmpty(value), expected);
  }
});
