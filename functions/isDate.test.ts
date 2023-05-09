import { assertEquals } from "testing";
import { isDate } from "./isDate.ts";

Deno.test("is-date", () => {
  const data: [unknown, boolean][] = [
    [new Date(), true],
    [undefined, false],
    [NaN, false],
    ["", false],
    [[], false],
    [false, false],
    [{}, false],
    [{ length: 0 }, false],
  ];

  for (const [value, expected] of data) {
    assertEquals(isDate(value), expected);
  }
});
