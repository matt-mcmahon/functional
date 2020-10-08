import { describe } from "../../lib/describe"
import { clone } from "./clone"

describe("clone", async ({ assert, inspect }) => {
  const original = { foo: "foo", bar: "bar" }
  const copy = clone(original)
  clone(original).bar = "BAZ"
  assert({
    actual: original === copy,
    expected: false,
    given: inspect`origin === copy`,
  })
  assert({
    actual: copy === original,
    expected: false,
    given: `original === copy`,
  })
})

describe("clone, shallow", async ({ assert, inspect }) => {
  const original = { foo: "foo", bar: "bar" }
  const copy = clone(original)
  copy.bar = "BAZ"
  assert({
    actual: original === copy,
    expected: false,
    given: inspect`origin === copy`,
  })
  assert({ actual: original, expected: { foo: "foo", bar: "bar" } })
  assert({ actual: copy, expected: { foo: "foo", bar: "BAZ" } })
})

describe("clone, deep", async ({ assert, inspect }) => {
  const original = { foo: "foo", bar: { baz: "baz" } }
  const copy = clone(original)
  copy.bar.baz = "BAZ"
  assert({
    actual: original === copy,
    expected: false,
    given: inspect`origin === copy`,
  })
  assert({ actual: original, expected: { foo: "foo", bar: { baz: "baz" } } })
  assert({ actual: copy, expected: { foo: "foo", bar: { baz: "BAZ" } } })
})

describe("clone, undefined", async ({ assert }) => {
  const value = undefined
  const original: { foo: string; bar?: string } = { foo: "foo" }
  const copy = clone(original)
  copy.bar = "bar"
  assert({ actual: clone(value), expected: value })
  assert({ actual: original, expected: { foo: "foo" } })
  assert({ actual: copy, expected: { foo: "foo", bar: "bar" } })
})

describe("clone, null", async ({ assert }) => {
  const value = null
  const original: { foo: string; bar: string | null } = {
    foo: "foo",
    bar: null,
  }
  const copy = clone(original)
  copy.bar = "bar"
  assert({ actual: clone(value), expected: value })
  assert({ actual: original, expected: { foo: "foo", bar: null } })
  assert({ actual: copy, expected: { foo: "foo", bar: "bar" } })
})

describe("clone, date", async ({ assert, inspect }) => {
  const original = new Date(Date.now())
  const copy = clone(original)
  assert({
    actual: original === copy,
    expected: false,
    given: inspect`origin === copy`,
  })
  assert({ actual: copy, expected: original })
  assert({
    given: inspect`${copy} instanceof Date?`,
    actual: copy instanceof Date,
    expected: true,
  })
})

describe("clone, array", async ({ assert, inspect }) => {
  const original = [1, 2, 3]
  const copy = clone(original)
  assert({
    actual: original === copy,
    expected: false,
    given: inspect`origin === copy`,
  })
  assert({ actual: copy, expected: original })
  assert({
    actual: Array.isArray(copy),
    expected: true,
    given: `copy of array is array`,
  })
})

describe("clone, recursive", async ({ assert, inspect }) => {
  type A = { a?: A }
  const a: A = {}
  a.a = a

  type O = Array<A | O>
  const original: O = [a]
  original.push(original)

  const copy = clone(original)
  assert({
    actual: original === copy,
    expected: false,
    given: inspect`original === copy`,
    should: `clone should be a new object`,
  })

  assert({
    actual: copy,
    expected: original,
    given: `recursive structure`,
    should: `clone`,
  })
})
