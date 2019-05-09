import { equal as namedExport, default as equal } from './equal.js'
import test from 'tape'

test('equal module', assert => {
  {
    const expected = 'function'
    const actual = typeof equal
    const message = `equal
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
    const actual = equal === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof equal.signature
    const message = 'equal.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('equal function', assert => {
  assert.equal(typeof equal, 'function', 'equal should be a function')

  const equalsA = equal('a')

  {
    const actual = typeof equalsA
    const expected = 'function'
    const message = 'equal(a) should create a function'
    assert.equal(actual, expected, message)
  }

  {
    const actual = equalsA('a')
    const expected = true
    const message = `equals('a')('a') === true`
    assert.equal(actual, expected, message)
  }

  {
    const actual = equalsA('b')
    const expected = false
    const message = `equals('a')('b') === false`
    assert.equal(actual, expected, message)
  }

  assert.end()
})
