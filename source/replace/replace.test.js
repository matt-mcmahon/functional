import { describe } from "@mwm/describe"
import { replace, implementation, signatures } from "./replace"

describe(
  {
    path: "source/replace",
    public: [replace],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const replaceWith = replace("foo")
    const replaceIn = replaceWith("bar")
    const source = "foo baz bix foo Foo"
    const replaced = replaceIn(source)

    {
      const given = inspect`replaceIn(${source})`
      const actual = replaced
      const expected = "bar baz bix foo Foo"
      assert({ given, actual, expected })
    }

    {
      const given = inspect`${/foo/g}`
      const should = inspect`replace all ${"foo"}, but not ${"Foo"} in ${source}`
      const actual = replace(/foo/g)("bar")(source)
      const expected = "bar baz bix bar Foo"
      assert({ given, should, actual, expected })
    }
  }
)
