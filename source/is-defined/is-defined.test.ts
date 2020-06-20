import { describe } from "@mwm/describe";
import { isDefined, implementation, signatures } from "./is-defined.ts";

describe(
  {
    path: "source/isDefined",
    public: [isDefined],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const data = [
      [null, false],
      [undefined, false],
      [NaN, false],
      ["", true],
      [[], true],
      [false, true],
      [{}, true],
      [{ length: 0 }, true],
    ];

    const test = ([value, expected]) => {
      const actual = isDefined(value);
      const given = inspect`isDefined(${value})`;
      assert({ given, actual, expected });
    };

    data.forEach(test);
  },
);
