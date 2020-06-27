import { describe } from "@mwm/sign"
import { filter } from "./filter"

describe("filter", async ({ assert, inspect }) => {
  const predicate = (n: number) => n % 2 === 0
  const evens = filter(predicate)

  {
    const expected: number[] = [2, 4, 6]
    const actual = evens([1, 2, 3, 4, 5, 6])
    const given = inspect``
    const should = inspect`filter out odd numbers`
    assert({ expected, actual, given, should })
  }

  {
    const expected: number[] = []
    const actual = evens([])
    const given = inspect``
    const should = inspect`work with an empty iterable.`
    assert({ expected, actual, given, should })
  }

  {
    const expected: number[] = []
    const actual = evens([1, 3, 5])
    const given = inspect``
    const should = inspect`return an empty array`
    assert({ expected, actual, given, should })
  }

  {
    const expected: number[] = [2, 4, 6]
    const actual = evens([2, 4, 6])
    const given = inspect``
    const should = inspect`be ${expected}, got ${actual}`
    assert({ expected, actual, given, should })
  }
})
