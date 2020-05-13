import { describe } from "@mwm/describe"
import { has, implementation, signatures, hasOwnProperty } from "./has.js"

describe(
  {
    path: "source/has",
    public: [has],
    private: [implementation, signatures, hasOwnProperty],
  },
  async ({ assert, inspect }) => {
    const a = { a: "a" }
    const b = { b: "b" }
    const hasA = has("a")
    const hasB = has("b")

    {
      const actual = hasA(a)
      const given = inspect`${a}`
      const should = inspect`have own property ${"a"}`
      assert({ actual, given, should })
    }

    {
      const given = inspect`${b}`
      const should = inspect`have own property ${"b"}`
      const actual = hasB(b)
      assert({ given, should, actual })
    }

    const iOfB = Object.create(b)
    iOfB.a = "a"
    const eg = {
      a: "a",
      prototype: {
        b: "b",
      },
    }

    {
      const given = inspect`instance of ${eg}`
      const should = inspect`have own property ${"a"}`
      const actual = hasA(iOfB)
      assert({ given, should, actual })
    }

    {
      const given = inspect`instance of ${eg}`
      const should = inspect`not have own property ${"b"}`
      const actual = hasB(iOfB)
      const expected = false
      assert({ given, should, actual, expected })
    }
  }
)
