import { describe } from "../../lib/describe"
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
    const arg: Array<string[]> = [["a", "b", "c"]]
    const expected: Array<string[]> = []
    const actual = tail(arg)
    const given = inspect`tail(${arg})`
    const should = inspect`${expected}`
    assert({ actual, expected, given, should })
  }

  {
    const arg = ["a", 1, "c"]
    const expected = [1, "c"]
    const actual = tail(arg)
    const given = inspect`tail(${arg})`
    const should = inspect`${expected}`
    assert({ actual, expected, given, should })
  }
})
