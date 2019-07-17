import { describe } from "@mwm/describe"
import { uncurry, implementation, signatures } from "./uncurry"

describe(
  {
    path: "source/uncurry",
    public: [uncurry],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const curried = x => y => z => x + y + z

    {
      const variadic = uncurry(3)(curried)
      const expected = curried(1)(2)(3)
      const actual = variadic(1, 2, 3)
      const given = `uncurry(${3})(x => y => z => x + y + z)`
      const should = inspect`be "${expected}", got "${actual}"`
      assert({ expected, actual, given, should })
    }
  }
)
