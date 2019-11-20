import { describe } from "@mwm/describe"
import { both, implementation, signatures } from "./both"

describe(
  {
    path: "source/both",
    public: [both],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const gt10 = v => v > 10
    const lt20 = v => v < 20

    const both0 = both
    const both1 = both0(gt10)
    const both2 = both1(lt20)

    ;[
      [10, false],
      [20, false],
      [19, true],
      [11, true],
    ].forEach(([value, expected]) => {
      const given = inspect`the value ${value}`
      const should = inspect`${
        expected ? "be" : "not be"
      } between ${10} and ${20}`
      const actual = both2(value)
      assert({ given, should, actual, expected })
    })

    {
      assert.doesNotThrow(() => {
        const first = v => false
        const second = v => {
          throw new Error("both should never execute me")
        }
        both(first)(second)(true)
      }, "should short-circuit execution")
    }
  }
)
