import { equals as namedExport, default as equals } from './equals.js'
import test from 'tape'

test('equals module', assert => {
  {
    const expected = 'function'
    const actual = typeof equals
    const message = `equals
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
    const actual = equals === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof equals.signature
    const message = 'equals.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('equals function', assert => {
  assert.equals(typeof equals, 'function', 'equals should be a function')

  const equalsA = equals('a')

  {
    const actual = typeof equalsA
    const expected = 'function'
    const message = 'equals(a) should create a function'
    assert.equals(actual, expected, message)
  }

  {
    const actual = equalsA('a')
    const expected = true
    const message = `equals('a')('a') === true`
    assert.equals(actual, expected, message)
  }

  {
    const actual = equalsA('b')
    const expected = false
    const message = `equals('a')('b') === false`
    assert.equals(actual, expected, message)
  }

  assert.end()
})
