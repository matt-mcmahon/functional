import { describe } from "@mwm/describe"
import { merge, implementation, signatures } from "./merge"

describe(
  {
    path: "source/merge",
    public: [merge],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const first = {
      a: 1,
      b: 1,
    }

    const second = {
      b: 2,
    }

    const merge1 = merge(first)
    assert({
      actual: typeof merge1,
      expected: "function",
      given: inspect`merge(${first})`,
      should: "return a partially applied function",
    })

    const actual = merge1(second)

    const expected = {
      a: 1,
      b: 2,
    }

    assert({
      actual,
      expected,
      given: inspect`merge(${first})(${second})`,
      should: inspect`overwrite ${{ b: 1 }} with ${{ b: 2 }}`,
    })

    assert({
      expected,
      actual,
      given: inspect`expanded object`,
      should: inspect`not be the same as the initial object`,
    })
  }
)
