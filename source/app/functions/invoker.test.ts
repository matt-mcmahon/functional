// cSpell:ignore ghijklm abcdefghijklm

import { describe } from "../../lib/describe"
import { invoker } from "./invoker"

describe("invoker", async ({ assert, inspect }) => {
  const target = "abcdefghijklm"
  {
    const slice1 = invoker("slice")
    const slice2 = slice1(6)
    const expected = "ghijklm"
    const actual = slice2(target)
    const given = inspect`invoker(${"slice"})(${6})(${"target"})`
    assert({ expected, actual, given })
  }

  {
    const sliceFrom = invoker("slice")(6, 8)
    const expected = "gh"
    const actual = sliceFrom(target)
    const given = inspect`invoker(${"slice"})(${6}, ${8})(${target})`
    assert({ expected, actual, given })
  }

  {
    const o = {
      x: 1,
      sumX(x2: number, x3: number, x4: number, x5 = 0) {
        return this.x + x2 + x3 + x4 + x5
      },
    }
    const given = inspect`
          invoker(${3})(${"sumX"})(${2}, ${3}, ${4}, ${5})({ x, sumX })
        `.trim()
    const actual = invoker("sumX")(2, 3, 4)(o)
    const expected = 1 + 2 + 3 + 4
    const should = inspect`sum o.x with args[${0}, ${1}, ${2}]`
    assert({ given, actual, expected, should })
  }
})
