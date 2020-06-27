import { describe } from "@mwm/sign"
import { tail } from "./tail"

describe("tail", async ({ assert, inspect }) => {
  {
    const arg = ["a", "b", "c"]
    const expected = ["b", "c"]
    const actual = tail(arg)
    const given = inspect`tail(${arg})`
    const should = inspect`${expected}`
    assert({ actual, expected, given, should })
  }

  {
    const arg = ["a"]
    const expected: string[] = []
    const actual = tail(arg)
    const given = inspect`tail(${arg})`
    const should = inspect`${expected}`
    assert({ actual, expected, given, should })
  }

  {
    const arg: string[] = []
    const expected: string[] = []
    const actual = tail(arg)
    const given = inspect`tail(${arg})`
    const should = inspect`${expected}`
    assert({ actual, expected, given, should })
  }

  {
    const arg: string[][] = [["a", "b", "c"]]
    const expected: string[] = []
    const actual = tail(arg)
    const given = inspect`tail(${arg})`
    const should = inspect`${expected}`
    assert({ actual, expected, given, should })
  }
})
