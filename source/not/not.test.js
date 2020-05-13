import { describe } from "@mwm/describe"
import { not, implementation, signatures } from "./not.js"

describe(
  {
    path: "source/not",
    public: [not],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const test = ([value, expected]) => {
      const actual = not(value)
      const given = inspect`not(${value})`
      assert({ expected, actual, given })
    }

    ;[
      [true, false],
      [false, true],
      // truthy values
      [{}, false],
      ["some string", false],
      [5, false],
      // falsy values
      [0, true],
      [-0, true],
      [+0, true],
      ["", true],
      [``, true],
      [null, true],
      [undefined, true],
      [NaN, true],
    ].forEach(test)
  }
)
