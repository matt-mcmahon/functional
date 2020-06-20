import { toUnary } from "./to-unary.ts";
import { describe } from "../../lib/describe.ts";

describe(`arity.ts`, ({ assert, inspect }) => {
  {
    const vf = (
      s: string,
      f: (...ns: number[]) => number,
      ...ns: number[]
    ) => `${s} is ${f(...ns)}`;
    const uf = toUnary(vf);
    const values = ["max", Math.max, 1, 2, 3];
    const actual = uf(["max", Math.max, 1, 2, 3]);
    const expected = "max is 3";
    const given = inspect`unary(${values})`;
    assert({ actual, expected, given });
  }
  {
    const vf = (...ns: number[]) => `${Math.max(...ns)}`;
    const uf = toUnary(vf);
    const values = [1, 2, 3];
    const actual = uf(values);
    const expected = "3";
    const given = inspect`unary(${values})`;
    const should = inspect`evaluate to ${expected}`;
    assert({ actual, expected, given, should });
  }
});
