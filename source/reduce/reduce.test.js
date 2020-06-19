import { describe } from "@mwm/describe";
import { reduce, implementation, signatures } from "./reduce.js";

describe(
  {
    path: "source/reduce",
    public: [reduce],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const add = (x, y) => x + y;
      const value = [1, 3, 5];
      const expected = 9;
      const actual = reduce(add)(0)(value);
      const given = inspect`reduce(${add})(${0})(${value})`;
      assert({ actual, expected, given });
    }

    const a = "a";
    const b = "b";
    const c = "c";
    const concat = (x = "", y = "") => x + y;

    {
      const expected = "abc";
      const value = [b, c];
      const actual = reduce(concat)(a)(value);
      const given = inspect`reducing(${concat})(${a})(${value})`;
      assert({ actual, expected, given });
    }

    {
      const expected = "a";
      const value = [];
      const actual = reduce(concat)(a)(value);
      const given = inspect`reducing(${concat})(${a})(${value})`;
      assert({ actual, expected, given });
    }

    const accumulator = "accumulator";
    const thrower = () => {
      throw Error("I should not be called");
    };
    const unreducable = reduce(thrower)(accumulator);

    const tests = [[], 456, { value: "not reducible" }];

    tests.forEach((value) => {
      const actual = unreducable(value);
      const expected = accumulator;
      const given = inspect`reduce(${thrower})(${accumulator})(${value})`;
      const should = inspect`not throw; yield ${actual}`;
      assert({ actual, expected, given, should });
    });
  },
);
