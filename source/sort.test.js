import test from "tape"
import { inspect } from "./util/index.js"
import { sort as namedExport, default as sort } from "./sort.js"
import { sort as indexExport } from "./index"

test("sort module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof sort
    const message = inspect`typeof sort
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = sort === namedExport && sort === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof sort.signature
    const message = inspect`typeof sort.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("sort module: implementation", assert => {
  const as = [3, 5, 9, 1, 0, 22]
  const bs = [0, 1, 3, 5, 9, 22]
  const fun = sort((a, b) => a - b)

  {
    const actual = fun(as)
    const expected = bs
    const message = inspect`sorting numbers
      should be ${expected},
      got ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const actual = fun([])
    const expected = []
    const message = "Should work with an empty sortable."
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
