import { describe } from "../../lib/describe.ts";
import { isArray } from "./isArray.ts";

describe("is-array", ({ assert, inspect }) => {
  const data: [unknown, boolean][] = [
    [null, false],
    [undefined, false],
    [NaN, false],
    ["", false],
    [[], true],
    [false, false],
    [{}, false],
    [{ length: 0 }, false],
  ];

  const test = <A, B>([value, expected]: [A, B]) => {
    const actual = isArray(value);
    const given = inspect`isDefined(${value})`;
    assert({ given, actual, expected });
  };

  data.forEach(test);
});

// These tests won't compile unless isDefined has the  `: a is ...` type guard
describe("is-array, type guard", ({ assert }) => {
  const f = (value: unknown) => (isArray(value) ? "array" : "error");

  {
    const expected = "array";
    const value = [0, 1, 2];
    const actual = f(value);
    const should = "pass type guard";
    assert({ actual, expected, value, should });
  }

  {
    const expected = "error";
    const value = "012";
    const actual = f(value);
    const should = "fail type guard";
    assert({ actual, expected, value, should });
  }
});
