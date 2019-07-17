import { describe, configure } from "@mwm/describe"
import { blackbird, signatures, implementation } from "./blackbird"

describe(
  {
    path: "source/blackbird",
    public: [blackbird],
    private: [signatures, implementation],
  },
  async ({ assert, inspect }) => {
    const blackbird0 = blackbird

    // the converging function:
    const inspectArguments = (...as) => {
      const inspect = configure({
        colors: false,
        depth: 1,
      })
      const ss = as.map(a => inspect`${a}`)
      const s = ss.join(", ")
      return `(${s})`
    }

    {
      const actual = inspectArguments("HELLO", "hello", 5)
      const expected = "('HELLO', 'hello', 5)"
      const given = inspect`converging function`
      const should = inspect`return ${expected}`
      assert({ given, should, actual, expected })
    }

    const blackbird1 = blackbird0(inspectArguments)

    const toUpper = s => s.toUpperCase()
    const toLower = s => s.toLowerCase()
    const toLength = s => s.length
    const blackbird2 = blackbird1(toUpper, toLower, toLength)
    const blackbird3 = blackbird2("HeLlO")

    {
      const expected = "('HELLO', 'hello', 5)"
      const actual = blackbird3
      const given = inspect`blackbird2("HeLlO")`
      const should = inspect`return ${expected}`
      assert({ given, should, actual, expected })
    }
  }
)
