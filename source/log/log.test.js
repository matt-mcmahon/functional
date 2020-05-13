import { describe } from "@mwm/describe"
import { log, implementation, signatures } from "./log.js"

describe(
  {
    path: "source/log",
    public: [log],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const sideEffect = x => x * 2
    const value = 4
    const actual = log(sideEffect)(value)
    const expected = value
    const given = inspect`log("some message")(${value})`
    const should = inspect`should return the original value, ${value}`
    assert({ actual, expected, given, should })
  }
)
