import { describe } from "../../lib/describe";
import { sort } from "./sort";

describe("sort", async ({ assert, inspect }) => {
  const as = [3, 5, 9, 22, 1, 0];
  const bs = [0, 1, 3, 5, 9, 22];
  const fun = sort((a: number, b: number) => a - b);

  {
    const actual = fun(as);
    const expected = bs;
    const given = inspect`sorting numbers`;
    const should = inspect`${expected}`;
    assert({ actual, expected, given, should });
  }

  {
    const value: number[] = [];
    const expected: number[] = [];
    const actual = fun(value);
    const given = inspect`fun(${value})`;
    const should = inspect`work with an empty sortable.`;
    assert({ expected, actual, given, should });
  }
});
