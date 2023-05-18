// deno-lint-ignore-file ban-ts-comment
import { assert } from "npm:spec.ts";
import { assertEquals } from "testing";
import { Falsy, isFalsy } from "./isFalsy.ts";

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

  // Type Guard Tests, raise compiler errors:
  {
    const never = {} as never;
    const data: Falsy[] = [
      "",
      0,
      false,
      0,
      0n,
      NaN as Falsy,
    ];
    data.forEach((a) => {
      //@ts-expect-error
      if (isFalsy(a)) assert(a, never);
    });

    {
      const a = "something";
      if (isFalsy(a)) assert(a, never);
    }

    {
      const a = 5;
      if (isFalsy(a)) assert(a, never);
    }

    {
      const a = { foo: 5 };
      //@ts-expect-error
      if (isFalsy(a)) assert(a, never);
    }
  }
});
