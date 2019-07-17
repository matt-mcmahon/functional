import { describe } from "@mwm/describe"
import { sort, implementation, signatures } from "./sort"

describe(
  {
    path: "source/sort",
    public: [sort],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const as = [3, 5, 9, 22, 1, 0]
    const bs = [0, 1, 3, 5, 9, 22]
    const fun = sort((a, b) => a - b)

    {
      const actual = fun(as)
      const expected = bs
      const given = inspect`sorting numbers`
      const should = inspect`${expected}`
      assert({ actual, expected, given, should })
    }

    {
      const value = []
      const expected = []
      const actual = fun(value)
      const given = inspect`fun(${value})`
      const should = inspect`work with an empty sortable.`
      assert({ expected, actual, given, should })
    }
  }
)
