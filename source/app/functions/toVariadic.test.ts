import { toVariadic } from "./toVariadic"
import { describe } from "../../lib/describe"

describe("to-variadic", ({ assert, inspect }) => {
  {
    const uf = (ns: number[]) => `${Math.min(...ns)}`
    const vf = toVariadic(uf)
    const values = [3, 2, 1]
    const actual = vf(...values)
    const expected = "1"
    const given = inspect`variadic(${3}, ${2}, ${1})`
    const should = inspect`evaluate to ${expected}`
    assert({ actual, expected, given, should })
  }

  {
    const unary = (
      args: [string, (...ns: number[]) => number, ...number[]]
    ) => {
      const [s, f, ...ns] = args
      return `${s} is ${f(...ns)}`
    }
    const variadic = toVariadic(unary)
    const actual = variadic("min", Math.min, 3, 2, 1)
    const expected = "min is 1"
    const given = inspect`vf(${"min"}, ${Math.min}, ${3}, ...)`
    assert({ actual, expected, given })
  }

  {
    const args = [1, 2, 3]
    const unarySum = (ns: number[]) => ns.reduce((x, y) => x + y, 0)
    const variadicSum = toVariadic(unarySum)
    const s = `(${args.map((v) => inspect`${v}`).join(", ")})`

    assert({
      actual: unarySum(args),
      expected: 6,
      given: inspect`${unarySum}(${args})`,
    })

    assert({
      expected: unarySum(args),
      actual: variadicSum(...args),
      given: inspect`toVariadic(${unarySum})(${args})`,
      should: inspect`be equivalent to ${unarySum}` + s,
    })
  }
})
