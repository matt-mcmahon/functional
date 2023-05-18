import { assertEquals } from "testing";
import { isPositiveZero } from "./isPositiveZero.ts";

Deno.test("isPositiveZero", () => {
  const data: [unknown, boolean][] = [
    [0, true],
    [+0, true],
    [-0, false],
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
      isPositiveZero(value),
      expected,
      `[${index}]: ${value} ${expected ? "should" : "should not"} be +0`,
    );
  });
});
