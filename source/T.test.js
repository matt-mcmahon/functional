import test from "tape"
import { inspect } from "./util/index.js"
import { T as namedExport, default as T } from "./T.js"
import { T as indexExport } from "./index"

test("T module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof T
    const message = inspect`typeof T
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = T === namedExport && T === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof T.signature
    const message = inspect`typeof T.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("T module: implementation", assert => {
  {
    const actual = T()
    const expected = true
    const message = "T() should return true"
    assert.equal(actual, expected, message)
  }
  {
    const actual = T(false)
    const expected = true
    const message = "T(false) should return true"
    assert.equal(actual, expected, message)
  }
  assert.end()
})
