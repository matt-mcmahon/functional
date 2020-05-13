import { describe } from "@mwm/describe"
import { either, signatures, implementation } from "./either.js"

describe(
  {
    path: "source/either",
    public: [either],
    private: [signatures, implementation],
  },
  async ({ assert, inspect }) => {
    const gt10 = x => x > 10
    const even = x => x % 2 === 0
    const f = either(gt10)(even)

    {
      const expected = true
      const actual = f(101)
      const given = inspect``
      const should = inspect`101 > 10 = true, got "${actual}"`
      assert({ expected, actual, given, should })
    }

    {
      const expected = true
      const actual = f(8)
      const given = inspect``
      const should = inspect`true because 8 is even, got "${actual}"`
      assert({ expected, actual, given, should })
    }

    {
      const expected = false
      const actual = f(7)
      const given = inspect``
      const should = inspect`7 < 10 = false, 7 is not even, got "${actual}"`
      assert({ expected, actual, given, should })
    }

    const T = () => true
    const throws = () => {
      throw new Error("either should not execute me")
    }

    assert.doesNotThrow(() => {
      const expected = true
      const actual = either(T)(throws)("anything")
      const given = inspect``
      const should = inspect`first predicate returns true, got "${actual}"`
      assert({ expected, actual, given, should })
    }, "either short circuits, should not throw")
  }
)
