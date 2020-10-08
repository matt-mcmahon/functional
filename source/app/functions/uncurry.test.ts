import { describe } from "@mwm/sign"
import { uncurry } from "./uncurry"

describe("uncurry", async ({ assert, inspect }) => {
  {
    const curried = (x: number) => (y: number) => (z: number) => x + y + z
    const variadic = uncurry(3)(curried)
    const expected = curried(1)(2)(3)
    const actual = variadic(1, 2, 3)
    const given = `uncurry(${3})(x => y => z => x + y + z)`
    const should = inspect`be "${expected}", got "${actual}"`
    assert({ expected, actual, given, should })
  }
  {
    const curried = (n: number) => (a: string) => a.repeat(n)
    const variadic = uncurry(2)(curried)
    const expected = curried(1)("baa ")
    const actual = variadic(1, "baa ")
    const given = `uncurry(${3})(x => y => z => x + y + z)`
    const should = inspect`be "${expected}", got "${actual}"`
    assert({ expected, actual, given, should })
  }
})
