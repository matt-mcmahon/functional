import { describe } from "@mwm/describe"
import { tap, implementation, signatures } from "./tap"

describe(
  {
    path: "source/tap",
    public: [tap],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const sideEffect = x => x * 2
    const value = 4
    const actual = tap(sideEffect)(value)
    const expected = value
    const given = inspect`tap(x => x * ${2})(${value})`
    const should = inspect`should return the original value, ${value}`
    assert({ actual, expected, given, should })
  }
)
