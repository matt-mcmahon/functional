import { describe } from "@mwm/sign"
import { log } from "./log"

describe("log", async ({ assert, inspect }) => {
  const value = 4
  const message = inspect`the value is...`
  const actual = log(message)(value)
  const expected = value
  const given = inspect`log(${message})(${value})`
  const should = inspect`should return ${value}`
  assert({ actual, expected, given, should })
})
