import { describe } from "@mwm/describe"
import { take, implementation, signatures } from "./take"

describe(
  {
    path: "source/take",
    public: [take],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const [a, b, c, d, e] = ["a", "b", "c", "d", "e"]
    {
      const as = [a, b, c, d, e]
      const actual = take(3)(as)
      const expected = [a, b, c]
      const given = inspect`take(${3}, ${as})`
      const should = inspect`be ${expected}`
      assert({ given, should, actual, expected })
    }

    {
      const as = [a, b]
      const actual = take(4, as)
      const expected = [a, b]
      const given = inspect`first(${4}, ${as})`
      const should = inspect`be ${expected}`
      assert({ given, should, actual, expected })
    }
  }
)
