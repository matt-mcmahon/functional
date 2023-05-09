import { assertEquals } from "testing";
import { isString } from "./isString.ts";

Deno.test("is-string", () => {
  const data: [unknown, boolean][] = [
    [1, false],
    [0, false],
    [NaN, false],
    [-Infinity, false],
    [+Infinity, false],
    [undefined, false],
    ["", true],
    [[], false],
    [false, false],
    [{}, false],
    [{ length: 0 }, false],
  ];

  for (const [value, expected] of data) {
    assertEquals(isString(value), expected);
  }
});

Deno.test("is-string: string-like object", () => {
  const valueOf = () => "fake v";
  const toString = () => "fake s";
  const stringLike = { valueOf, toString };

  assertEquals("" + stringLike, valueOf());
  assertEquals(`${stringLike}`, toString());
  assertEquals(isString(stringLike), false);
});
