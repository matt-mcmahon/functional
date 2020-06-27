import { describe } from "@mwm/sign"
import { concat } from "./concat"

describe("slice", async ({ assert, inspect }) => {
  const as = ["a", "b", "c"]
  const bs = ["d", "e", "f"]
  {
    const actual = concat(as)(bs)
    const expected = [...as, ...bs]
    const given = inspect`concat(${as})(${bs})`
    assert({ actual, expected, given })
  }

  {
    const as = ["a", 1, { foo: "bar" }]
    const bs = ["b", { bar: "baz" }]
    const actual = concat<unknown>(as)(bs)
    const expected = [...as, ...bs]
    const given = inspect`concat(${as})(${bs})`
    assert({ actual, expected, given })
  }
})
