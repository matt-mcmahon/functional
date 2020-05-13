import { describe } from "@mwm/describe"
import { tail, implementation, signatures } from "./tail.js"

describe(
  {
    path: "source/tail",
    public: [tail],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const arg = ["a", "b", "c"]
      const expected = ["b", "c"]
      const actual = tail(arg)
      const given = inspect`tail(${arg})`
      const should = inspect`${expected}`
      assert({ actual, expected, given, should })
    }

    {
      const arg = ["a"]
      const expected = []
      const actual = tail(arg)
      const given = inspect`tail(${arg})`
      const should = inspect`${expected}`
      assert({ actual, expected, given, should })
    }

    {
      const arg = []
      const expected = []
      const actual = tail(arg)
      const given = inspect`tail(${arg})`
      const should = inspect`${expected}`
      assert({ actual, expected, given, should })
    }

    {
      const arg = [["a", "b", "c"]]
      const expected = []
      const actual = tail(arg)
      const given = inspect`tail(${arg})`
      const should = inspect`${expected}`
      assert({ actual, expected, given, should })
    }
  }
)
