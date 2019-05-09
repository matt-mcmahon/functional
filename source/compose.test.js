import { compose as namedExport, default as compose } from './compose.js'
import test from 'tape'

test('compose module', assert => {
  {
    const expected = 'function'
    const actual = typeof compose
    const message = `compose
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'function'
    const actual = typeof namedExport
    const message = `namedExport
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = compose === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof compose.signature
    const message = 'compose.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  {
    const f = x => x + 1
    const g = x => 2 * x
    const actual = compose(
      f,
      g
    )(3)
    assert.notEqual(
      actual,
      8,
      `compose should apply right to left (2 * 3) + 1 != 8`
    )
    assert.equal(
      actual,
      7,
      `'compose should apply right to left' (2 * 3) + 1 == 7`
    )
  }

  assert.end()
})
