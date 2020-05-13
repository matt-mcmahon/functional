import { describe } from "@mwm/describe"
import { identity, signatures, implementation } from "./identity.js"

describe(
  {
    path: "source/identity",
    public: [identity],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const foo = { name: "foo" }
    {
      const given = inspect`identity(${foo})`
      const should = inspect`return ${foo}`
      const actual = identity(foo)
      const expected = foo
      assert({ given, should, actual, expected })
    }
  }
)
