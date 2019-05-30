import { inspect as namedExport, default as inspect } from "./inspect.js"
import { inspect as indexExport } from "./index"
import test from "tape"

test("inspect module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof inspect
    const message = `inspect
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = inspect === namedExport && inspect === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("inspect module: implementation", assert => {
  {
    const expected = `one { one: 'one' } two`
    const actual = inspect`one ${{ one: "one" }} two`
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
