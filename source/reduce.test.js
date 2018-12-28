import reduce from './reduce'
import { reduce as namedExport } from './index.js'
import test from 'tape'

test('reduce module', assert => {
  {
    const expected = 'function'
    const actual = typeof reduce
    const message = `reduce
      is a "${actual}",
      expected ${expected}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'function'
    const actual = typeof namedExport
    const message = `namedExport
      is a "${actual}",
      expected ${expected}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = reduce === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const add = (x, y) => x + y
    const expected = 9
    const actual = reduce(add)(0)([1, 3, 5])
    const message = `reducing [1, 3, 5]
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const subtract = (x, y) => x - y
    const expected = 0
    const actual = reduce(subtract)(9)([5, 3, 1])
    const message = `reducing [1, 3, 5]
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
