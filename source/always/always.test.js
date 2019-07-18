import { describe } from "@mwm/describe"
import { always, implementation, signatures } from "./always"

describe(
  {
    path: "source/always",
    public: [always],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const argument = "bar"
    const expected = "foo"
    {
      const actual = always(expected, argument)
      const given = inspect`always(${expected}, ${argument})`
      const should = inspect`still return ${expected}`
      assert({ actual, expected, given, should })
    }
    {
      const actual = always(expected)(argument)
      const given = inspect`always(${expected})(${argument})`
      const should = inspect`still return ${expected}`
      assert({ actual, expected, given, should })
    }
  }
)
