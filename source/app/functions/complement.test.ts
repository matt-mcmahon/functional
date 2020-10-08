import { describe } from "@mwm/sign"
import { complement } from "./complement"

describe("complement", async ({ assert, inspect }) => {
  const something = (v: unknown) => !!v
  const T = () => true

  const complement0 = complement
  const complement1 = complement0(something)
  const complement2 = complement1(true)

  {
    const given = inspect`complement2`
    const should = inspect`be the value ${false}`
    const actual = complement2
    const expected = false
    assert({ actual, expected, given, should })
  }

  {
    const given = inspect`complement(${something}) and ${false}`
    const should = inspect`return !${false}`
    const actual = complement(something)(false)
    const expected = true
    assert({ actual, expected, given, should })
  }

  {
    const given = inspect`complement(${something}) and something ${"truthy"}`
    const should = inspect`return ${false}`
    const actual = complement(something)("truthy")
    const expected = false
    assert({ actual, expected, given, should })
  }

  {
    const given = inspect`${T} and the argument ${false}`
    const should = inspect`ignore the argument and return !${true}`
    const actual = complement(T)(false)
    const expected = false
    assert({ actual, expected, given, should })
  }
})
