import { describe } from "../../lib/describe"
import { orDefault } from "./orDefault"

describe("orDefault", async ({ assert, inspect }) => {
  const or = orDefault("default")

  {
    const given = "actual"
    const expected = given
    const actual = or(given)
    assert({ expected, actual, given: inspect`${given}` })
  }

  {
    const given = null
    const expected = "default"
    const actual: string | null = or(given)
    assert({ expected, actual, given: inspect`${given}` })
  }

  {
    const given = undefined
    const expected = "default"
    const actual: string | undefined = or(given)
    assert({ expected, actual, given: inspect`${given}` })
  }
})
