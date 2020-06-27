import { describe } from "@mwm/sign"
import { isFunction } from "./isFunction"

describe("isFunction", async ({ assert, inspect }) => {
  const expected = true
  const should = inspect`be a function`
  {
    const actual = isFunction(function test() {})
    const given = inspect`function test() {}`
    assert({ actual, expected, given, should })
  }

  {
    const actual = isFunction(function* test() {})
    const given = inspect`function* test() {}`
    assert({ actual, expected, given, should })
  }

  {
    const actual = isFunction(async function test() {})
    const given = inspect`async function test() {}`
    assert({ actual, expected, given, should })
  }

  {
    const actual = isFunction(() => {})
    const given = inspect`() => {}`
    assert({ actual, expected, given, should })
  }

  {
    const expected = false
    const actual = isFunction("null")
    const given = inspect`${null}`
    const should = inspect`not be a function`
    assert({ actual, expected, given, should })
  }

  {
    const expected = false
    const actual = isFunction("function")
    const given = inspect`${"function"}`
    const should = inspect`not be a function`
    assert({ actual, expected, given, should })
  }
})
