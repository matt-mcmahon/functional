import prop from './prop'
import { prop as namedExport } from './index'
import test from 'tape'

test('prop module', assert => {
  {
    const expected = 'function'
    const actual = typeof prop
    const message = `prop
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
    const actual = prop === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'foo'
    const actual = prop('foo')({ foo: 'foo' })
    const message = `Value of property foo
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = undefined
    const actual = prop('foo')({ bar: 'bar' })
    const message = `nonexistant property value
      is "${actual}",
      expected "${expected}"`
  }

  assert.end()
})
