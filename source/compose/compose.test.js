import { describe } from "@mwm/describe"
import { compose, signatures, implementation } from "./compose"

describe(
  {
    path: "source/compose",
    public: [compose],
    private: [signatures, implementation],
  },
  async ({ assert, inspect }) => {
    const f = x => x + 1
    const g = x => 2 * x

    const compose0 = compose
    const compose1 = compose0(f, g)

    {
      const actual = compose1(3)
      const expected = 7
      const given = inspect`composition for (${2} × ${3}) + ${1} = ${expected}`
      const should = inspect`not be ${2} × (${3} + ${1}) = ${8}`
      assert({ actual, expected, given, should })
    }

    {
      const f = (...xs) => xs.reduce((a, b) => a + b, 0)
      const g = x => x * 2
      const actual = compose(
        g,
        f
      )(1, 2, 3)
      const expected = 12
      const given = inspect`Variadic Function/Args`
      assert({ actual, expected, given })
    }
  }
)
