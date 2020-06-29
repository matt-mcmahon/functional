import { pipe } from "./pipe"
import { describe } from "@mwm/sign"

describe("fluent pipe", ({ assert, inspect }) => {
  const double = (x: number) => x * 2
  const numToString = (x: number) => `${x}`
  const toCharacterArray = (x: string) => x.split("")
  const joinWithDashes = (x: string[]) => x.join("-")

  const p1 = pipe.fluent(double)
  const p2 = p1.then(numToString)
  const p3 = p2.then(toCharacterArray)
  const p4 = p3.then(joinWithDashes)

  const value = 12345

  const values = [
    [p1(12345), 24690, inspect`p1(${value})`],
    [p2(12345), "24690", inspect`p2(${value})`],
    [p3.invoke(12345), ["2", "4", "6", "9", "0"], inspect`p3(${value})`],
    [p4(12345), "2-4-6-9-0", inspect`p4(${value})`],
  ]

  values.forEach(([actual, expected, given]) => {
    assert({ actual, expected, given })
  })

  assert({
    actual: p4.invoke(12345),
    expected: p4(12345),
    given: inspect`p4.invoke(${value})`,
    should: inspect`be the same as p4(${value})`,
  })
})

describe("classic pipe", ({ assert, inspect }) => {
  const double = (x: number) => x * 2
  const numToString = (x: number) => `${x}`
  const toCharacterArray = (x: string) => x.split("")
  const joinWithDashes = (x: string[]) => x.join("-")
  const value = 12345

  const f = pipe(double, numToString, toCharacterArray, joinWithDashes)
  const actual = f(value)
  const expected = "2-4-6-9-0"
  const given = inspect`pipe(double, numToString, toCharacterArray, joinWithDashes)`

  assert({ actual, expected, given })
})
