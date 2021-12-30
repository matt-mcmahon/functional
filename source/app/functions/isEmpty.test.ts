import { describe } from "../../lib/describe"
import { isEmpty } from "./isEmpty"

describe("is-empty", async ({ assert, inspect }) => {
  const data: [unknown, boolean][] = [
    [null, false],
    [undefined, false],
    ["", true],
    [[], true],
    [{}, true],
    [NaN, false],
    [false, false],
    [{ length: 0 }, false],
    [new Set(), true],
    [new Set([1]), false],
    [new Map(), true],
    [new Map([["a", 1]]), false],
  ]

  const test = ([value, expected]: [unknown, boolean]) => {
    const actual = isEmpty(value)
    const given = inspect`isEmpty(${value})`
    assert({ given, actual, expected })
  }

  data.forEach(test)
})
