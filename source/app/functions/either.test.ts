import { describe } from "../../lib/remote/describe.ts";

import { either } from "./either.ts";
import { T } from "./T.ts";

describe("either", async ({ assert, inspect }) => {
  const max = 10;
  const gt10 = (x: number) => x > max;
  const even = (x: number) => x % 2 === 0;
  const f = either(gt10)(even);

  {
    const value = 101;
    const expected = true;
    const actual = f(value);
    const given = inspect`${value} > ${max}`;
    assert({ actual, expected, given });
  }

  {
    const expected = true;
    const actual = f(8);
    const given = inspect``;
    const should = inspect`true because 8 is even, got "${actual}"`;
    assert({ expected, actual, given, should });
  }

  {
    const value = 8;
    const expected = true;
    const actual = f(value);
    const given = inspect`${value} is even`;
    assert({ actual, expected, given });
  }

  {
    const value = 7;
    const expected = false;
    const actual = f(value);
    const given = inspect`${value} < ${max} and is odd`;
    assert({ actual, expected, given });
  }

  {
    const throws = () => {
      throw new Error("either should not execute me");
    };
    const plan = {
      expected: true,
      given: inspect`first predicate always returns true`,
      should: inspect`not execute ${throws}`,
    };
    try {
      const actual = either(T)(throws)("anything");
      assert({ ...plan, actual });
    } catch (err) {
      assert({ ...plan, actual: false });
    }
  }
});
