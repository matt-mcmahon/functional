import { describe } from "@mwm/describe"
import { equals, signatures, implementation } from "./equals.js"

describe(
  {
    path: "source/equals",
    public: [equals],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const [a, b] = ["a", "b"]

    {
      const expected = true
      const actual = equals(a, a)
      const given = inspect`equals(${a}, ${a})`
      const should = inspect`be ${expected}`
      assert({ expected, actual, given, should })
    }

    {
      const expected = true
      const actual = equals(a)(a)
      const given = inspect`equals(${a})(${a})`
      const should = inspect`be ${expected}`
      assert({ expected, actual, given, should })
    }

    {
      const expected = false
      const actual = equals(a, b)
      const given = inspect`equals(${a}, ${b})`
      const should = inspect`be ${expected}`
      assert({ expected, actual, given, should })
    }

    {
      const expected = false
      const actual = equals(a)(b)
      const given = inspect`equals(${a})(${b})`
      const should = inspect`be ${expected}`
      assert({ expected, actual, given, should })
    }
  }
)
