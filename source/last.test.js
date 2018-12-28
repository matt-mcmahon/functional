import last from './last'
import { last as namedExport } from './index.js'
import test from 'tape'

test('last module', assert => {
  {
    const expected = 'function'
    const actual = typeof last
    const message = `last
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
    const actual = last === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'c'
    const actual = last(['a', 'b', 'c'])
    const message = `last ["a", "b", "c"]
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = undefined
    const actual = last([])
    const message = `last []
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
