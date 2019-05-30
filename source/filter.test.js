import test from "tape"
import { inspect } from "./util/index.js"
import { filter as namedExport, default as filter } from "./filter.js"
import { filter as indexExport } from "./index"

test("filter module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof filter
    const message = inspect`typeof filter
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = filter === namedExport && filter === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof filter.signature
    const message = inspect`typeof filter.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("filter module: implementation", assert => {
  const predicate = n => n % 2 === 0
  const evens = filter(predicate)

  {
    const actual = evens([1, 2, 3, 4, 5, 6])
    const expected = [2, 4, 6]
    const message = "should filter out odd numbers"
    assert.deepEqual(actual, expected, message)
  }

  {
    const actual = evens([])
    const expected = []
    const message = "Should work with an empty mappable."
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = []
    const actual = evens([1, 3, 5])
    const message = `return an empty array`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = [2, 4, 6]
    const actual = evens([2, 4, 6])
    const message = inspect`Should be ${expected}, got ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
