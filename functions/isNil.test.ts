import { assertEquals } from "testing";
import { isNil } from "./isNil.ts";

Deno.test("isNil", () => {
  const data: [unknown, boolean][] = [
    [null, true],
    [undefined, true],
    [NaN, false],
    [0, false],
    [[], false],
    ["", false],
    [false, false],
    [true, false],
    ["truthy", false],
  ];

  for (const [value, expected] of data) {
    assertEquals(isNil(value), expected);
  }
});
