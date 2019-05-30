import test from "tape"
import { inspect } from "./util/index.js"
import { assoc as namedExport, default as assoc } from "./assoc.js"
import { assoc as indexExport } from "./index"

test("assoc module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof assoc
    const message = inspect`typeof assoc
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = assoc === namedExport && assoc === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof assoc.signature
    const message = inspect`typeof assoc.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("assoc module: implementation", assert => {
  {
    const setBar = assoc("bar")("bar")
    const expected = {
      foo: "foo",
      bar: "bar",
    }
    const actual = setBar({
      foo: "foo",
    })
    const message = inspect`after add 'bar'
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = { a: 1, b: 3 }
    const actual = assoc("b")(3)({ a: 1, b: 2 })
    const message = inspect`after overwrite 'b'
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
