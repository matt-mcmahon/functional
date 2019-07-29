import { describe } from "@mwm/describe"
import { isEmpty, implementation, signatures } from "./isEmpty"

describe(
  {
    path: "source/isEmpty",
    public: [isEmpty],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const data = [
      [null, false],
      [undefined, false],
      ["", true],
      [[], true],
      [{}, true],
      [NaN, false],
      [false, false],
      [{ length: 0 }, false],
    ]

    const test = ([value, expected]) => {
      const actual = isEmpty(value)
      const given = inspect`isEmpty(${value})`
      assert({ given, actual, expected })
    }

    data.forEach(test)
  }
)
