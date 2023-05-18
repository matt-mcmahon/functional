// deno-lint-ignore-file ban-ts-comment

import { assert } from "npm:spec.ts";
import { assertEquals } from "testing";
import { Falsy } from "./isFalsy.ts";
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

  data.forEach(([actual, expected], index) => {
    assertEquals(
      isTruthy(actual),
      expected,
      `[${index}]: ${actual} ${expected ? "should" : "should not"} be truthy`,
    );
  });

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
      if (isTruthy(a)) assert(a, never);
    });

    {
      const a = "something";
      //@ts-expect-error
      if (isTruthy(a)) assert(a, never);
    }

    {
      const a = 5;
      //@ts-expect-error
      if (isTruthy(a)) assert(a, never);
    }

    {
      const a = { foo: 5 };
      //@ts-expect-error
      if (isTruthy(a)) assert(a, never);
    }
  }
});
