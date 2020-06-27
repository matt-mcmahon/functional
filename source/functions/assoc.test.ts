import { describe } from "@mwm/sign"
import { assoc } from "./assoc"

describe("assoc", async ({ assert, inspect }) => {
  {
    type FooBar = {
      foo: string
      bar?: string
    }
    const value: FooBar = { foo: "foo" }
    const a1 = assoc("bar", value)
    const a2 = a1("bar")
    const actual = a2({ foo: "foo" })
    const expected = { foo: "foo", bar: "bar" }
    const given = inspect`we assoc(${"bar"})(${"bar"}) on ${value}`
    assert({ given, actual, expected })
  }
  {
    type Foo = {
      foo: string
    }
    const value: Foo = { foo: "foo" }
    const a1 = assoc<Foo, "foo">("foo")
    const a2 = a1("bar")
    const actual = a2(value)
    const expected = { foo: "bar" }
    const given = inspect`we assoc(${"foo"})(${"bar"}) on ${value}`
    assert({ given, actual, expected })
  }
  {
    type AB = {
      a: number
      b: number
    }
    assert({
      given: inspect`we use assoc to overwrite ${"b"}`,
      actual: assoc<AB, "b">("b")(3)({ a: 1, b: 2 }),
      expected: { a: 1, b: 3 },
    })
  }
  {
    const given = inspect`an empty number[] and 2:1`
    const actual = assoc(2, [1])(1)([])
    const expected = [, , 1]
    assert({ given, expected, actual })
  }
})
