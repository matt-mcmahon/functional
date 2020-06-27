import { describe } from "@mwm/sign"
import { unless } from "./unless"

describe("unless", async ({ assert, inspect }) => {
  type A = "A"
  type B = "B"
  const isA = (v: unknown): v is A => v === "A"
  const makeB = (v: unknown): B => "B"
  const unless_isA_makeB = unless(isA)(makeB)

  {
    const value = "C"
    const expected = "B"
    const actual = unless_isA_makeB(value)
    const given = inspect`make_B_unless_is_A(${value})`
    assert({ expected, actual, given })
  }

  {
    const value = "A"
    const expected = "A"
    const actual = unless_isA_makeB(value)
    const given = inspect`make_B_unless_is_A(${value})`
    assert({ expected, actual, given })
  }

  const inc = (n: number) => n + 1
  const isNotSafe = (n: number): n is number =>
    n >= Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER
  const unlessNotSafe = unless(isNotSafe)
  const saferInc = unlessNotSafe(inc)
  {
    const value = Number.MAX_SAFE_INTEGER
    const expected = value
    const actual = saferInc(value)
    const given = inspect`saferInc(${value})`
    assert({ expected, actual, given })
  }

  {
    const value = 1
    const expected = 2
    const actual = saferInc(value)
    const given = inspect`saferInc(${value})`
    assert({ expected, actual, given })
  }
})
