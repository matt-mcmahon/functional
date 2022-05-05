import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { isArray } from "./isArray.ts";

Deno.test("is-array", () => {
  const data: [unknown, boolean][] = [
    [null, false],
    [undefined, false],
    [NaN, false],
    ["", false],
    [[], true],
    [false, false],
    [{}, false],
    [{ length: 0 }, false],
  ];

  for (const [value, expected] of data) {
    assertEquals(isArray(value), expected);
  }

  const requiresTypeGuard = (
    value: unknown,
  ) => (isArray(value) ? "array" : "error");

  assertEquals(requiresTypeGuard([0, 1, 2]), "array");
  assertEquals(requiresTypeGuard("012"), "error");
});
