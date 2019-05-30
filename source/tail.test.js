import test from "tape"
import { inspect } from "./util/index.js"
import { tail as namedExport, default as tail } from "./tail.js"
import { tail as indexExport } from "./index"

test("tail module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof tail
    const message = inspect`typeof tail
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = tail === namedExport && tail === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof tail.signature
    const message = inspect`typeof tail.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("tail module: implementation", assert => {
  {
    const arg = ["a", "b", "c"]
    const expected = ["b", "c"]
    const actual = tail(arg)
    const message = inspect`tail(${arg})
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const arg = ["a"]
    const expected = []
    const actual = tail(arg)
    const message = inspect`tail(${arg})
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const arg = []
    const expected = []
    const actual = tail(arg)
    const message = inspect`tail(${arg})
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const arg = [["a", "b", "c"]]
    const expected = []
    const actual = tail(arg)
    const message = inspect`tail(${arg})
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
