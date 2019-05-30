import test from "tape"
import { prop as namedExport, default as prop } from "./prop.js"
import { prop as indexExport } from "./index"
import { inspect } from "./util/index.js"

test("prop module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof prop
    const message = inspect`typeof prop
      should be ${expected},
      is ${actual} `
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = prop === namedExport && prop === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof prop.signature
    const message = inspect`typeof prop.signature
      should be ${expected},
      is ${actual} `
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("prop module: implementation", assert => {
  {
    const expected = "foo"
    const actual = prop("foo")({ foo: "foo" })
    const message = inspect`property foo
      should be ${expected},
      got ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = undefined
    const actual = prop("foo")({ bar: "bar" })
    const message = inspect`nonexistant property value
      should be ${expected},
      got ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
