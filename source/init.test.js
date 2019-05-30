import test from "tape"
import { inspect } from "./util/index.js"
import { init as namedExport, default as init } from "./init.js"
import { init as indexExport } from "./index"

test("init module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof init
    const message = inspect`typeof init
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = init === namedExport && init === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof init.signature
    const message = inspect`typeof init.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("init module: implementation", assert => {
  {
    const expected = ["a", "b"]
    const actual = init(["a", "b", "c"])
    const message = `init(["a", "b", "c"])
      is [${actual.map(v => `"${v}"`).join(", ")}],
      expected [${expected.map(v => `"${v}"`).join(", ")}]`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = []
    const actual = init(["a"])
    const message = `init(["a"])
      is [${actual.map(v => `"${v}"`).join(", ")}],
      expected [${expected.map(v => `"${v}"`).join(", ")}]`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = []
    const actual = init([])
    const message = `init([])
      is [${actual.map(v => `"${v}"`).join(", ")}],
      expected [${expected.map(v => `"${v}"`).join(", ")}]`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
