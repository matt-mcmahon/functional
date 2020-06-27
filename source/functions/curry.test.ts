import { describe } from "@mwm/sign"
import { curry } from "./curry"

describe("curry", async ({ assert, inspect }) => {
  const f = function f(a: string, b: string, c: string) {
    return a + b + c
  }

  {
    const given = inspect`${"f(a, b, c)"}`
    const should = inspect`have a length of ${3}`
    const actual = f.length
    const expected = 3
    assert({ given, should, actual, expected })
  }

  const f0 = curry(f)

  {
    const given = inspect`zero applied argument`
    const should = inspect`accept 3 more`
    const actual = typeof f0
    const expected = "function"
    assert({ given, should, actual, expected })
  }

  {
    const given = inspect`applying (${"a"}, ${"b"}, ${"c"}) to ${f0}`
    const should = inspect`yield ${"abc"}`
    const actual = f0("a", "b", "c")
    const expected = "abc"
    assert({ given, should, actual, expected })
  }

  const f1 = f0("a")

  {
    const given = inspect`1 applied argument`
    const should = inspect`accept 2 more`
    const actual = typeof f1
    const expected = "function"
    assert({ given, should, actual, expected })
  }

  {
    const given = inspect`applying (${"b"}, ${"c"}) to ${f1}`
    const should = inspect`yield ${"abc"}`
    const actual = f1("b", "c")
    const expected = "abc"
    assert({ given, should, actual, expected })
  }

  const f2 = f1("b")

  {
    const given = inspect`2 applied arguments`
    const should = inspect`accept 1 more`
    const actual = typeof f2
    const expected = "function"
    assert({ given, should, actual, expected })
  }

  {
    const given = inspect`applying (${"c"}) to ${f2}`
    const should = inspect`yield ${"abc"}`
    const actual = f1("b", "c")
    const expected = "abc"
    assert({ given, should, actual, expected })
  }
})
