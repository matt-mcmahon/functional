import { describe } from "@mwm/describe"
import { prop, implementation, signatures } from "./prop.js"

describe(
  {
    path: "source/prop",
    public: [prop],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    {
      const expected = "foo"
      const actual = prop("foo")({ foo: "foo" })
      const given = inspect`property foo`
      const should = inspect`${expected}`
      assert({ actual, expected, given, should })
    }

    {
      const expected = undefined
      const actual = prop("foo")({ bar: "bar" })
      const given = inspect`nonexistant property value`
      const should = inspect`${expected}`
      assert({ actual, expected, given, should })
    }
  }
)
