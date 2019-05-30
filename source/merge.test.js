import { inspect } from "./util"
import { merge as namedExport, default as merge } from "./merge.js"
import { merge as indexExport } from "./index"
import test from "tape"

test("merge module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof merge
    const message = `merge
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = merge === namedExport && merge === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof merge.signature
    const message = "merge.signature should be a string"
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("merge module: implementation", assert => {
  const first = {
    a: 1,
    b: 1,
  }

  const second = {
    b: 2,
  }

  const merge1 = merge(first)
  assert.equal(
    typeof merge1,
    "function",
    "merge(...) should return a partially applied function"
  )

  const actual = merge1(second)

  const expected = {
    a: 1,
    b: 2,
  }

  assert.deepEqual(
    actual,
    expected,
    inspect`{ b: 2 } should overwrite { b: 1 }, got ${actual}`
  )

  assert.notEqual(
    expected,
    actual,
    "expanded object should not be the same as the initial object"
  )
  assert.end()
})
