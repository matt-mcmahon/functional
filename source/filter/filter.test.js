import { describe } from "@mwm/describe"
import { filter, implementation, signatures } from "./filter"

describe(
  {
    path: "source/filter",
    public: [filter],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const predicate = n => n % 2 === 0
    const evens = filter(predicate)

    {
      const expected = [2, 4, 6]
      const actual = evens([1, 2, 3, 4, 5, 6])
      const given = inspect``
      const should = inspect`filter out odd numbers`
      assert({ expected, actual, given, should })
    }

    {
      const expected = []
      const actual = evens([])
      const given = inspect``
      const should = inspect`work with an empty iterable.`
      assert({ expected, actual, given, should })
    }

    {
      const expected = []
      const actual = evens([1, 3, 5])
      const given = inspect``
      const should = inspect`return an empty array`
      assert({ expected, actual, given, should })
    }

    {
      const expected = [2, 4, 6]
      const actual = evens([2, 4, 6])
      const given = inspect``
      const should = inspect`be ${expected}, got ${actual}`
      assert({ expected, actual, given, should })
    }
  }
)
