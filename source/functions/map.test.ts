import { map, mapV } from "./map"
import { describe } from "@mwm/sign"

describe("map", ({ assert, inspect }) => {
  const as = ["1", "2", "3"]
  const bs = [1, 2, 3]
  const ab = (a: string) => parseInt(a, 10)

  {
    const f = map(ab)
    const actual = f(as)
    const expected = bs
    const given = inspect`map(${ab})(${as})`
    const should = `accept accept an array`
    assert({ actual, expected, given, should })
  }

  {
    const f = mapV(ab)
    const actual = f(...as)
    const expected = bs
    const given = inspect`mapV(${ab})(${1}, ${2}, ${3})`
    const should = `accept multiple arguments`
    assert({ actual, expected, given, should })
  }
})
