import { describe } from "../../lib/describe";
import { isDefined } from "./isDefined";

describe("is-defined", async ({ assert, inspect }) => {
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

  const test = <A, B>([value, expected]: [A, B]) => {
    const actual = isDefined(value);
    const given = inspect`isDefined(${value})`;
    assert({ given, actual, expected });
  };

  data.forEach(test);
});

// These tests won't compile unless isDefined has the  `: a is ...` type guard
describe("is-defined, type guard", async ({ assert, inspect }) => {
  const f = (value: { a?: () => string }) =>
    isDefined(value.a) ? value.a() : "error";

  {
    const expected = "I'm A!";
    const value = { a: () => expected };
    const actual = f(value);
    const given = inspect`{ a: () => ${expected}}`;
    const should = "pass type guard";
    assert({ actual, expected, given, should });
  }

  {
    const expected = "error";
    const value = {};
    const actual = f(value);
    const should = "fail type guard";
    assert({ actual, expected, value, should });
  }
});
