import { cap } from "./cap"
import { describe } from "@mwm/sign"

describe("cap", ({ assert, inspect }) => {
  {
    const value = "uncapped"
    const actual = cap(value)
    const expected = "Uncapped"
    assert({ given: inspect`${value}`, actual, expected })
  }

  {
    const value = ""
    const actual = cap(value)
    const expected = ""
    assert({ given: inspect`${value}`, actual, expected })
  }
})
