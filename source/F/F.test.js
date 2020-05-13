import { describe } from "@mwm/describe"
import { F, implementation, signatures } from "./F.js"

describe(
  {
    path: "source/F",
    public: [F],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const expected = false

    assert({
      given: inspect`no argument to ${F}`,
      should: inspect`return ${false}`,
      actual: F(),
      expected,
    })

    assert({
      given: inspect`argument ${true} to ${F}`,
      should: inspect`ignorer argument and return ${false}`,
      actual: F(true),
      expected,
    })
  }
)
