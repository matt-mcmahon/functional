import { assertEquals } from "testing";
import { isZero } from "./isZero.ts";

Deno.test("isZero", () => {
  const data: [unknown, boolean][] = [
    [0, true],
    [+0, true],
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
      isZero(value),
      expected,
      `[${index}]: ${value} ${expected ? "should" : "should not"} be 0`,
    );
  });
});
