import { assertEquals } from "testing";
import { isNegativeZero } from "./isNegativeZero.ts";

Deno.test("isNegativeZero", () => {
  const data: [unknown, boolean][] = [
    [0, false],
    [+0, false],
    [-0, true],
    [null, false],
    [undefined, false],
    [NaN, false],
    [[], false],
    ["", false],
    [false, false],
    [true, false],
  ];

  data.forEach(([value, expected], index) => {
    assertEquals(
      isNegativeZero(value),
      expected,
      `[${index}]: ${value} ${expected ? "should" : "should not"} be -0`,
    );
  });
});
