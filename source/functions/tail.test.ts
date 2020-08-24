import { describe } from "@mwm/sign"
import { tail } from "./tail"

describe("tail", async ({ assert, inspect }) => {
  {
    const arg = ["a", "b", "c"] as const
    const expected = ["b", "c"] as const
    const actual = tail(arg)
    const given = inspect`tail(${arg})`
    const should = inspect`${expected}`
    assert({ actual, expected, given, should })
  }

  {
    const arg = ["a"] as const
    const expected = [] as const
    const actual = tail(arg)
    const given = inspect`tail(${arg})`
    const should = inspect`${expected}`
    assert({ actual, expected, given, should })
  }

  {
    const arg = [] as const
    const expected = [] as const
    //@ts-ignore
    const actual = tail(arg)
    const given = inspect`tail(${arg})`
    const should = inspect`${expected}`
    assert({ actual, expected, given, should })
  }

  {
    const arg = [["a", "b", "c"]] as const
    const expected = [] as const
    const actual = tail(arg)
    const given = inspect`tail(${arg})`
    const should = inspect`${expected}`
    assert({ actual, expected, given, should })
  }
})
