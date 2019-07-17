import { describe } from "@mwm/describe"
import { reduceRight, implementation, signatures } from "./reduceRight"

describe(
  {
    path: "source/reduceRight",
    public: [reduceRight],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const add = (x, y) => x + y
      const value = [1, 3, 5]
      const expected = 9
      const actual = reduceRight(add)(0)(value)
      const given = inspect`reduceRight(${add})(${0})(${value})`
      assert({ actual, expected, given })
    }

    const a = "a"
    const b = "b"
    const c = "c"
    const concat = (x, y) => x + y

    {
      const expected = "abc"
      const value = [c, b]
      const actual = reduceRight(concat)(a)(value)
      const given = inspect`reduceRight(${concat})(${a})(${value})`
      assert({ actual, expected, given })
    }

    {
      const expected = "a"
      const value = []
      const actual = reduceRight(concat)(a)(value)
      const given = inspect`reduceRight(${concat})(${a})(${value})`
      assert({ actual, expected, given })
    }

    const accumulator = "accumulator"
    const thrower = () => {
      throw Error("I should not be called")
    }
    const unreducable = reduceRight(thrower)(accumulator)

    const tests = [[], 456, { value: "not reducible" }]

    tests.forEach(value => {
      const actual = unreducable(value)
      const expected = accumulator
      const given = inspect`reduceRight(${thrower})(${accumulator})(${value})`
      const should = inspect`not throw; yield ${actual}`
      assert({ actual, expected, given, should })
    })
  }
)
