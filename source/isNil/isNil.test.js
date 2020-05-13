import { describe } from "@mwm/describe"
import { isNil, implementation, signatures } from "./isNil.js"

describe(
  {
    path: "source/isNil",
    public: [isNil],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    ;[
      [null, true],
      [undefined, true],
      [NaN, false],
      [0, false],
      [[], false],
      ["", false],
      [false, false],
      [true, false],
      ["truthy", false],
    ].forEach(([value, expected]) =>
      assert({
        actual: isNil(value),
        expected,
        given: inspect`isNil(${value})`,
      })
    )
  }
)
