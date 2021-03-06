import { describe } from "../../lib/describe"
import { slice } from "./slice"

describe("slice", async ({ assert }) => {
  {
    const value = [0, 1, 2, 3, 4]
    {
      const actual = slice(1)(4)(value)
      const expected = [1, 2, 3]
      assert({ actual, expected, value })
    }
    {
      const actual = value.slice(1, 4)
      const expected = [1, 2, 3]
      assert({ actual, expected, value })
    }
  }

  test(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"])
  test("abcde", ["a", "b", "c", "d", "e"])
  test(
    new Map([
      ["0", "a"],
      ["1", "b"],
      ["2", "c"],
      ["3", "d"],
      ["4", "e"],
    ]),
    [
      ["0", "a"],
      ["1", "b"],
      ["2", "c"],
      ["3", "d"],
      ["4", "e"],
    ]
  )
  test(new Set(["a", "b", "c", "d", "e"]), ["a", "b", "c", "d", "e"])

  function test<A>(as: Iterable<A>, bs: A[]) {
    assert({
      expected: bs.slice(1, 4),
      actual: slice(1)(4)(as),
    })

    assert({
      expected: bs.slice(2, -1),
      actual: slice(2)(-1)(as),
    })

    assert({
      expected: bs.slice(2),
      actual: slice(2)()(as),
    })

    assert({
      expected: bs.slice(2, 100),
      actual: slice(2)(100)(as),
    })

    assert({
      expected: bs.slice(),
      actual: slice()()(as),
    })
  }
})
