import { assertEquals } from "testing";
import { isBoolean } from "./isBoolean.ts";

Deno.test("isBoolean", () => {
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
