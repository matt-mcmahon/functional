import { describe } from "@mwm/describe"
import { T, implementation, signatures } from "./T.js"

describe(
  {
    path: "source/T",
    public: [T],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const expected = true

    assert({
      given: inspect`no argument to ${T}`,
      should: inspect`return ${true}`,
      actual: T(),
      expected,
    })

    assert({
      given: inspect`argument ${false} to ${T}`,
      should: inspect`ignorer argument and return ${true}`,
      actual: T(false),
      expected,
    })
  }
)
