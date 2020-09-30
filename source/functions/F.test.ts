import { describe } from "@mwm/sign"
import { F } from "./F"

describe("f", async ({ assert, inspect }) => {
  const expected = false

  assert({
    given: inspect`no argument to ${F}`,
    should: inspect`return ${false}`,
    actual: F(),
    expected,
  })

  assert({
    given: inspect`argument ${true} to ${F}`,
    should: inspect`ignore argument and return ${false}`,
    actual: F(true),
    expected,
  })

  assert({
    given: inspect`argument ${"foo"}, ${"bar"} to ${F}`,
    should: inspect`ignore arguments and return ${false}`,
    actual: F("foo", "bar"),
    expected,
  })
})
