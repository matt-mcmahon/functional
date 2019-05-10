import { has as namedExport, default as has } from './has.js'
import test from 'tape'

test('has module', assert => {
  {
    const expected = 'function'
    const actual = typeof has
    const message = `has
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
    const actual = has === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof has.signature
    const message = 'has.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  const object = { a: 'a' }
  const hasA = has('a')

  {
    const expected = true
    const actual = has('a')(object)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = false
    const actual = hasA({ b: 'b' })
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
