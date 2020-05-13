import { describe } from "@mwm/describe"
import { unless, implementation, signatures } from "./unless.js"

describe(
  {
    path: "source/unless",
    public: [unless],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const isA = v => v === "A"
    const makeB = v => "B"
    const make_B_unless_is_A = unless(isA)(makeB)

    {
      const value = "C"
      const expected = "B"
      const actual = make_B_unless_is_A(value)
      const given = inspect`make_B_unless_is_A(${value})`
      assert({ expected, actual, given })
    }

    {
      const value = "A"
      const expected = "A"
      const actual = make_B_unless_is_A(value)
      const given = inspect`make_B_unless_is_A(${value})`
      assert({ expected, actual, given })
    }

    const isNil = value => value === null || value === undefined
    const inc = n => n + 1

    let saferInc = unless(isNil)(inc)
    {
      const value = null
      const expected = null
      const actual = saferInc(value)
      const given = inspect`saferInc(${value})`
      assert({ expected, actual, given })
    }

    {
      const value = 1
      const expected = 2
      const actual = saferInc(value)
      const given = inspect`saferInc(${value})`
      assert({ expected, actual, given })
    }
  }
)
