import { describe } from "@mwm/describe"
import { bind, implementation, signatures } from "./bind"

describe(
  {
    path: "source/bind",
    public: [bind],
    private: [signatures, implementation],
  },
  async ({ assert, inspect }) => {
    const objectWith = {
      method(value) {
        this.foo = value
        return "method called"
      },
    }

    const bind0 = bind
    const bind1 = bind0(objectWith.method)

    {
      const actual = typeof bind1
      const expected = "function"
      const given = inspect`${bind1}`
      const should = inspect`be a ${expected} (1 applied arguments)`
      assert({ given, should, actual, expected })
    }

    const boundTarget = {
      bar: "bar",
    }

    const bind2 = bind1(boundTarget)

    {
      const actual = typeof bind2
      const expected = "function"
      const given = inspect`${bind2}`
      const should = inspect`be a ${expected} (2 applied arguments)`
      assert({ given, should, actual, expected })
    }

    const bind3 = bind2("foo")

    {
      const actual = bind3
      const expected = "method called"
      const given = inspect`three applied arguments`
      const should = inspect`be the value ${expected}`
      assert({ given, should, actual, expected })
    }

    {
      const given = inspect`the original ${"boundTarget"} object`
      const should = inspect`have ${{
        foo: "BAZ",
      }}`
      const actual = boundTarget
      const expected = {
        foo: "foo",
        bar: "bar",
      }
      assert({ given, should, actual, expected })
    }

    {
      const actual = { misdirection: bind2 }
      const expected = {
        misdirection: bind2,
      }
      const given = inspect`${actual.misdirection("BAZ")} on ${"actual"}`
      const should = inspect`not have ${{
        foo: "BAZ",
      }}`
      assert({ given, should, actual, expected })
    }
  }
)
