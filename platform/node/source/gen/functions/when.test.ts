import { describe } from "../../lib/describe";
import { when } from "./when";

describe("when", async ({ assert, inspect }) => {
  type A = "A";
  type B = "B";
  const isA = (v: unknown): v is A => v === "A";
  const makeB = (v: unknown): B => "B";
  const whenIsA = when(isA)(makeB);

  {
    const value = "C";
    const expected = "C";
    const actual = whenIsA(value);
    const given = inspect`when_isA_makeB(${value})`;
    assert({ expected, actual, given });
  }

  {
    const value = "A";
    const expected = "B";
    const actual = whenIsA(value);
    const given = inspect`when_isA_makeB(${value})`;
    assert({ expected, actual, given });
  }

  const inc = (n: number) => n + 1;
  const isSafeN = (n: number): n is number =>
    n < Number.MAX_SAFE_INTEGER && n >= Number.MIN_SAFE_INTEGER;
  const whenIsSafeN = when(isSafeN);
  const saferInc = whenIsSafeN(inc);

  {
    const value = Number.MAX_SAFE_INTEGER;
    const expected = value;
    const actual = saferInc(value);
    const given = inspect`saferInc(${value})`;
    assert({ expected, actual, given });
  }

  {
    const value = 1;
    const expected = 2;
    const actual = saferInc(value);
    const given = inspect`saferInc(${value})`;
    assert({ expected, actual, given });
  }

  {
    const isNumberLike = when((x: string) => !isNaN(Number.parseInt(x)));
    const parseWhenNumberLike = isNumberLike((s) => Number.parseInt(s, 10));
    {
      const actual = parseWhenNumberLike("10");
      const expected = 10;
      assert({ expected, actual });
    }
    {
      const actual = parseWhenNumberLike("ten");
      const expected = "ten";
      assert({ expected, actual });
    }
  }
});
