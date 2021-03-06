import { describe } from "../../lib/describe"
import { concat } from "./concat"

describe("concat", async ({ assert, inspect }) => {
  const as = ["a", "b", "c"]
  const bs = ["d", "e", "f"]
  {
    const actual = concat(as)(bs)
    const expected = [...as, ...bs]
    const given = inspect`concat(${as})(${bs})`
    assert({ actual, expected, given })
  }

  {
    type AS = [string, number, { foo: string }]
    type BS = [string, { bar: string }, boolean]
    const as: AS = ["a", 1, { foo: "bar" }]
    const bs: BS = ["b", { bar: "baz" }, true]

    const actual = concat(as)(bs)
    const expected: [...AS, ...BS] = [...as, ...bs]
    const given = inspect`concat(${as})(${bs})`
    assert({ actual, expected, given })
  }
})
