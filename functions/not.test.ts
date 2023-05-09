import { assertEquals } from "testing";
import { not } from "./not.ts";

Deno.test("not", () => {
  const data: [unknown, boolean][] = [
    [true, false],
    [false, true],
    // truthy values
    [{}, false],
    ["some string", false],
    [5, false],
    // falsy values
    [0, true],
    [-0, true],
    [+0, true],
    ["", true],
    [``, true],
    [null, true],
    [undefined, true],
    [NaN, true],
  ];

  for (const [value, expected] of data) {
    assertEquals(not(value), expected);
  }
});
