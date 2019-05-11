import { either as namedExport, default as either } from './either.js'
import { either as indexExport } from './index'
import test from 'tape'

test('either module', assert => {
  {
    const expected = 'function'
    const actual = typeof either
    const message = `either
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = either === namedExport && either === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof either.signature
    const message = 'either.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('either functionality', assert => {
  const gt10 = x => x > 10
  const even = x => x % 2 === 0
  const f = either(gt10)(even)

  {
    const expected = true
    const actual = f(101)
    const message = `101 > 10 = true, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = f(8)
    const message = `true because 8 is even, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = false
    const actual = f(7)
    const message = `7 < 10 = false, 7 is not even, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  const T = () => true
  const F = () => false
  const throws = () => {
    throw new Error('either should not execute me')
  }

  assert.doesNotThrow(() => {
    const expected = true
    const actual = either(T)(throws)('anything')
    const message = `first predicate returns true, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }, 'either short circuits, should not throw')

  assert.end()
})
