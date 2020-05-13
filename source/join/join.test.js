import { describe } from "@mwm/describe"
import { join, implementation, signatures } from "./join.js"

describe(
  {
    path: "source/join",
    public: [join],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const char = "-"
      const list = ["a", "b", "c"]
      const actual = join(char)(list)
      const expected = "a-b-c"
      const given = inspect`join(${char})(${list})`
      const should = inspect`be ${expected}`
      assert({ given, should, actual, expected })
    }
  }
)
