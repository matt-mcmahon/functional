import { ifElse as namedExport, default as ifElse } from './ifElse.js'
import test from 'tape'

test('ifElse module', assert => {
  {
    const expected = 'function'
    const actual = typeof ifElse
    const message = `ifElse
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
    const actual = ifElse === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof ifElse.signature
    const message = 'ifElse.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('ifElse functionality', assert => {
  const isTrue = condition => condition === true
  const boolToString = ifElse(isTrue)(() => 'true')(() => 'false')

  {
    const expected = 'true'
    const actual = boolToString(true)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'false'
    const actual = boolToString(false)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'false'
    const actual = boolToString(1)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'false'
    const actual = boolToString(0)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
