import test from "tape"
import { inspect } from "./util/index.js"
import { always as namedExport, default as always } from "./always.js"
import { always as indexExport } from "./index"

test("always module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof always
    const message = inspect`typeof always
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = always === namedExport && always === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof always.signature
    const message = inspect`typeof always.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("always module: implementation", assert => {
  {
    const expected = "foo"
    const argument = "bar"
    const actual = always(expected)(argument)
    const message = inspect`should return
      original value, ${expected},
      not passed in value, ${argument}.`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
