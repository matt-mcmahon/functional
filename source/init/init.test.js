import { describe } from "@mwm/describe"
import { init, implementation, signatures } from "./init.js"

describe(
  {
    path: "source/init",
    public: [init],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const given = inspect`init(${["a", "b", "c"]})`
      const actual = init(["a", "b", "c"])
      const expected = ["a", "b"]
      assert({ given, actual, expected })
    }

    {
      const given = inspect`init(${["a"]})`
      const actual = init(["a"])
      const expected = []
      assert({ given, actual, expected })
    }

    {
      const given = inspect`init(${[]})`
      const expected = []
      const actual = init([])
      assert({ given, actual, expected })
    }
  }
)
