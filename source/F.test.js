import test from "tape"
import { inspect } from "./util/index.js"
import { F as namedExport, default as F } from "./F.js"
import { F as indexExport } from "./index"

test("F module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof F
    const message = inspect`typeof F
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = F === namedExport && F === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof F.signature
    const message = inspect`typeof F.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("F module: implementation", assert => {
  {
    const actual = F()
    const expected = false
    const message = inspect`F()
      should be ${expected},
      is ${actual}`
    assert.equal(actual, expected, message)
  }

  {
    const actual = F(true)
    const expected = false
    const message = inspect`F(true)
      should be ${expected},
      is ${actual}`
    assert.equal(actual, expected, message)
  }

  assert.end()
})
