import { describe } from "@mwm/sign"
import { isString } from "./isString"

describe("is-string", async ({ assert, inspect }) => {
  const data: [unknown, boolean][] = [
    [1, false],
    [0, false],
    [NaN, false],
    [-Infinity, false],
    [+Infinity, false],
    [undefined, false],
    ["", true],
    [[], false],
    [false, false],
    [{}, false],
    [{ length: 0 }, false],
  ]

  const test = <A, B>([value, expected]: [A, B]) => {
    const actual = isString(value)
    const given = inspect`isString(${value})`
    assert({ given, actual, expected })
  }

  data.forEach(test)
  {
    const value = {
      valueOf() {
        return "fake v"
      },
      toString() {
        return "fake s"
      },
    }
    const actual = isString(value)
    const expected = false
    const given = `string-like object with valueOf() => string`
    assert({ actual, expected, value, given })
  }
})
