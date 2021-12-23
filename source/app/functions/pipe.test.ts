import { pipe } from "./pipe"
import { describe } from "../../lib/describe"

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
