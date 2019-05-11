import { both as namedExport, default as both } from './both.js'
import { both as indexExport } from './index'
import test from 'tape'

test('both module', assert => {
  {
    const expected = 'function'
    const actual = typeof both
    const message = `both
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = both === namedExport && both === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof both.signature
    const message = 'both.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('both functionality', assert => {
  const gt10 = v => v > 10
  const lt20 = v => v < 20
  const between10and20 = both(gt10)(lt20)

  {
    const expected = true
    const actual = between10and20(15)
    const message = `15 is between 10 and 20, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = false
    const actual = between10and20(30)
    const message = `30 is not between 10 and 20, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    assert.doesNotThrow(() => {
      const first = v => false
      const second = v => {
        throw new Error('both should never execute me')
      }
      const expected = false
      const actual = both(first)(second)(true)
      const message = `first predicate returns "${expected}", got "${actual}"`
      assert.deepEqual(actual, expected, message)
    }, 'Should short-circuit execution')
  }

  assert.end()
})
