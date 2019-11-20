import { describe } from "@mwm/describe"
import { pipe, implementation, signatures } from "./pipe"

describe(
  {
    path: "source/pipe",
    public: [pipe],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const f = x => x + 1
    const g = x => 2 * x

    const fg = pipe(f, g)

    assert({
      given: inspect`pipe(f, g)(3)`,
      should: inspect`have order of operation "2 × (3 + 1) == 8"`,
      actual: fg(3),
      expected: 8,
    })

    const gf = pipe(g, f)

    assert({
      given: inspect`pipe(g, f)(3)`,
      should: inspect`have order of operation "(2 × x) + 1) == 7"`,
      actual: gf(3),
      expected: 7,
    })

    {
      const f = (...xs) => xs.reduce((x, y) => x + y)
      const g = x => x * 3
      const given = inspect`variadic first argument`
      const should = inspect`apply three arguments to ${f}`
      const actual = pipe(f, g)(1, 2, 3)
      const expected = 18
      assert({ given, should, actual, expected })
    }
  }
)
