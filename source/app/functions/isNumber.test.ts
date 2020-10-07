import { describe } from "../../lib/describe.ts";
import { isNumber } from "./isNumber.ts";

describe("is-number", ({ assert, inspect }) => {
  const data: [unknown, boolean][] = [
    [1, true],
    [0, true],
    [NaN, true],
    [-Infinity, true],
    [+Infinity, true],
    [undefined, false],
    ["", false],
    [[], false],
    [false, false],
    [{}, false],
    [{ length: 0 }, false],
  ];

  const test = <A, B>([value, expected]: [A, B]) => {
    const actual = isNumber(value);
    const given = inspect`isNumber(${value})`;
    assert({ given, actual, expected });
  };

  data.forEach(test);
});
