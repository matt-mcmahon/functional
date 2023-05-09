import { assertEquals, fail } from "testing";
import { isDefined } from "./isDefined.ts";

Deno.test("isDefined", () => {
  const data: [unknown, boolean][] = [
    [null, false],
    [undefined, false],
    [NaN, true],
    ["", true],
    [[], true],
    [false, true],
    [{}, true],
    [{ length: 0 }, true],
  ];

  for (const [value, expected] of data) {
    assertEquals(isDefined(value), expected);
  }
});

const never = (_: never) => {
  fail();
};

// These tests won't compile unless isDefined has the  `: a is ...` type guard
Deno.test("isDefined, type guard", () => {
  {
    const a = null;
    if (isDefined(a)) never(a);
  }

  {
    const a = undefined;
    if (isDefined(a)) never(a);
  }

  {
    const a = "";
    if (!isDefined(a)) never(a);
  }

  {
    const a = 0;
    if (!isDefined(a)) never(a);
  }

  {
    const a = false;
    if (!isDefined(a)) never(a);
  }
});
