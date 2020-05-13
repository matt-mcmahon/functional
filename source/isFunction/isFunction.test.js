import { describe } from "@mwm/describe"
import { isFunction, implementation, signatures } from "./isFunction.js"

describe(
  {
    path: "source/isFunction",
    public: [isFunction],
    private: [implementation, signatures],
  },
  async ({ assert, inspect }) => {
    const should = inspect`be a function`
    {
      const actual = isFunction(function test() {})
      const given = inspect`function test() {}`
      assert({ actual, given, should })
    }

    {
      const actual = isFunction(function* test() {})
      const given = inspect`function* test() {}`
      assert({ actual, given, should })
    }

    {
      const actual = isFunction(async function test() {})
      const given = inspect`async function test() {}`
      assert({ actual, given, should })
    }

    {
      const actual = isFunction(() => {})
      const given = inspect`() => {}`
      assert({ actual, given, should })
    }

    {
      const expected = false
      const actual = isFunction("null")
      const given = inspect`${null}`
      const should = inspect`not be a function`
      assert({ expected, actual, given, should })
    }

    {
      const expected = false
      const actual = isFunction("function")
      const given = inspect`${"function"}`
      const should = inspect`not be a function`
      assert({ expected, actual, given, should })
    }
  }
)
