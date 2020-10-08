import { describe } from "../../lib/describe"
import { isNaN } from "./isNaN"

describe("isNaN", async ({ assert, inspect }) => {
  const data: [unknown, boolean][] = [
    [null, false],
    [undefined, false],
    [NaN, true],
    [0, false],
    [[], false],
    ["", false],
    [false, false],
    [true, false],
    ["truthy", false],
  ]

  data.forEach(([value, expected]) =>
    assert({
      actual: isNaN(value),
      expected,
      given: inspect`isNil(${value})`,
    })
  )
})
