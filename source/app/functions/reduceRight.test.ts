import { describe } from "../../lib/describe.ts";
import { reduceRight } from "./reduceRight.ts";

describe("reduceRight", ({ assert, inspect }) => {
  {
    const add = (x: number, y: number) => x + y;
    const value = [1, 3, 5];
    const expected = 9;
    const actual = reduceRight(add)(0)(value);
    const given = inspect`reduceRight(${add})(${0})(${value})`;
    assert({ actual, expected, given });
  }

  const a = "a";
  const b = "b";
  const c = "c";
  const concat = (x: string, y: string) => x + y;

  {
    const expected = "abc";
    const value = [c, b];
    const actual = reduceRight(concat)(a)(value);
    const given = inspect`reduceRight(${concat})(${a})(${value})`;
    assert({ actual, expected, given });
  }

  {
    const expected = "a";
    const value: string[] = [];
    const actual = reduceRight(concat)(a)(value);
    const given = inspect`reduceRight(${concat})(${a})(${value})`;
    assert({ actual, expected, given });
  }

  {
    const a = "a";
    const thrower = (_a: string, _b: string) => {
      throw Error("I should not be called");
    };
    const unreducable = reduceRight(thrower)(a);
    const actual = unreducable([]);
    const expected = a;
    const given = inspect`reduceRight(thrower)(${a})(${[]})`;
    const should = inspect`not throw; yield ${a}`;
    assert({ actual, expected, given, should });
  }
});
