import test from "tape"
import { inspect } from "./util/index.js"
import { equals as namedExport, default as equals } from "./equals.js"
import { equals as indexExport } from "./index"

test("equals module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof equals
    const message = inspect`typeof equals
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = equals === namedExport && equals === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof equals.signature
    const message = inspect`typeof equals.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("equals module: implementation", assert => {
  const equalsA = equals("a")

  {
    const actual = typeof equalsA
    const expected = "function"
    const message = "equals(a) should create a function"
    assert.equals(actual, expected, message)
  }

  {
    const actual = equalsA("a")
    const expected = true
    const message = `equals('a')('a') === true`
    assert.equals(actual, expected, message)
  }

  {
    const actual = equalsA("b")
    const expected = false
    const message = `equals('a')('b') === false`
    assert.equals(actual, expected, message)
  }

  assert.end()
})
