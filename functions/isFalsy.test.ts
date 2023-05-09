import { assertEquals } from "testing";
import { isFalsy } from "./isFalsy.ts";

Deno.test("isFalsy", () => {
  const data: [unknown, boolean][] = [
    [true, false],
    [{}, false],
    [[], false],
    [42, false],
    ["0", false],
    ["false", false],
    [new Date(), false],
    [-42, false],
    [12n, false],
    [3.14, false],
    [-3.14, false],
    [Infinity, false],
    [-Infinity, false],
    [false, true],
    [0, true],
    [-0, true],
    [0n, true],
    ["", true],
    [null, true],
    [undefined, true],
    [NaN, true],
  ];

  for (const [actual, expected] of data) {
    assertEquals(isFalsy(actual), expected);
  }
});
