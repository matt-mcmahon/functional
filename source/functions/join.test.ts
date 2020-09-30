import { describe } from "@mwm/sign"
import { join } from "./join"

describe("join", async ({ assert, inspect }) => {
  {
    const char = "-"
    const f = join(char)
    const list = ["a", "b", "c"]
    const actual = f(list)
    const expected = "a-b-c"
    const given = inspect`join(${char})(${list})`
    assert({ given, actual, expected })
  }

  {
    const char = undefined
    const f = join(char)
    const list = ["a", "b", "c"]
    const actual = f(list)
    const expected = "a,b,c"
    const given = inspect`undefined separator, ${list}`
    assert({ given, actual, expected })
  }

  {
    const char = "-"
    const f = join(char)
    const list = ["a"]
    const actual = f(list)
    const expected = "a"
    const given = inspect`single element, ${list}`
    assert({ given, actual, expected })
  }

  {
    const char = ", "
    const f = join(char)
    const list = [
      "a",
      {
        toString() {
          return "object!"
        },
      },
      "b",
      1,
      "c",
    ]
    const actual = f(list)
    const expected = "a, object!, b, 1, c"
    const given = inspect`irregular array`
    assert({ given, actual, expected })
  }
})
