import { describe } from "../../lib/remote/describe.ts";
import { both } from "./both.ts";
import { toString } from "./toString.ts";
import { isNumber } from "./isNumber.ts";

describe("both", async ({ assert, inspect }) => {
  const gt10 = (v: number) => v > 10;
  const lt20 = (v: number) => v < 20;

  const both0 = both;
  const both1 = both0(gt10);
  const both2 = both1(lt20);

  const values: [number, boolean][] = [
    [10, false],
    [20, false],
    [19, true],
    [11, true],
  ];

  values.forEach(([value, expected]) => {
    const given = inspect`the value ${value}`;
    const should = inspect`${
      expected ? "be" : "not be"
    } between ${10} and ${20}`;
    const actual = both2(value);
    assert({ given, should, actual, expected });
  });

  try {
    const first = () => false;
    const second = () => {
      throw new Error("both should never execute me");
    };
    both(first)(second)(true);
  } catch (err) {
    assert({
      actual: false,
      expected: true,
      given: `first -> false`,
      should: `not run second`,
    });
  }

  const f = both(isNumber)(toString);
  {
    const value = 10;
    const expected = "10";
    assert({ actual: f(value), expected, value });
    assert({ actual: f(10), expected, value });
  }
  {
    const value = "bam";
    const expected = false;
    assert({ actual: f(value), expected, value });
  }
});
