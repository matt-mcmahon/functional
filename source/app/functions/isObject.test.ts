import { describe } from "../../lib/describe"
import { isObject } from "./isObject"

describe("isObject", async ({ assert, inspect }) => {
  const data: [unknown, boolean][] = [
    [1, false],
    [0, false],
    [NaN, false],
    [-Infinity, false],
    [+Infinity, false],
    [undefined, false],
    ["", false],
    [[], true],
    [false, false],
    [{}, true],
    [{ length: 0 }, true],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    [() => {}, false],
  ]

  const test = <A, B>([value, expected]: [A, B]) => {
    const actual = isObject(value)
    const given = inspect`isObject(${value})`
    assert({ given, actual, expected })
  }

  data.forEach(test)
})
