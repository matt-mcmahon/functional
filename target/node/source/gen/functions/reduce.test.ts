import { reduce, reduceV } from "./reduce";
import { describe } from "../../lib/describe";

describe("reduce", ({ assert, inspect }) => {
  const as = ["1", "2", "3"];
  const b = 7;
  const bab = (b: number, a: string) => b + parseInt(a, 10);

  {
    const f = reduce(bab)(1);
    const actual = f(as);
    const expected = b;
    const given = inspect`reduce(${bab})(${1})(${as})`;
    const should = `accept accept an array`;
    assert({ actual, expected, given, should });
  }

  {
    const f = reduceV(bab)(1);
    const actual = f(...as);
    const expected = b;
    const given = inspect`reduceV(${bab})(${1})(${1}, ${2}, ${3})`;
    const should = `accept multiple arguments`;
    assert({ actual, expected, given, should });
  }
});
