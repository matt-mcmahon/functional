import { describe } from "@mwm/sign"
import { identity } from "./identity"

describe("identity", async ({ assert, inspect }) => {
  const foo = { name: "foo" }
  {
    const given = inspect`identity(${foo})`
    const should = inspect`return ${foo}`
    const actual = identity(foo)
    const expected = foo
    assert({ given, should, actual, expected })
  }
})
