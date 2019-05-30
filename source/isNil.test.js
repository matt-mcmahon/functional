import test from "tape"
import { inspect } from "./util/index.js"
import { isNil as namedExport, default as isNil } from "./isNil.js"
import { isNil as indexExport } from "./index"

test("isNil module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof isNil
    const message = inspect`typeof isNil
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = isNil === namedExport && isNil === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof isNil.signature
    const message = inspect`typeof isNil.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("isNil module: implementation", assert => {
  const runTest = ([value, expected]) => {
    const actual = isNil(value)
    const message = inspect`isNil(${value})
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  ;[[null, true], [undefined, true], [0, false], [[], false]].forEach(runTest)

  assert.end()
})
