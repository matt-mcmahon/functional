import { assertEquals } from "testing";
import { isTruthy } from "./isTruthy.ts";

Deno.test("isTruthy", () => {
  const data: [unknown, boolean][] = [
    [true, true],
    [{}, true],
    [[], true],
    [42, true],
    ["0", true],
    ["false", true],
    [new Date(), true],
    [-42, true],
    [12n, true],
    [3.14, true],
    [-3.14, true],
    [Infinity, true],
    [-Infinity, true],
    [false, false],
    [0, false],
    [-0, false],
    [0n, false],
    ["", false],
    [null, false],
    [undefined, false],
    [NaN, false],
  ];

  for (const [actual, expected] of data) {
    assertEquals(isTruthy(actual), expected);
  }
});
