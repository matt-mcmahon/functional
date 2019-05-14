import { assoc as namedExport, default as assoc } from './assoc.js'
import { assoc as indexExport } from './index'
import test from 'tape'
import { inspect } from './util'

test('assoc module', assert => {
  {
    const expected = 'function'
    const actual = typeof assoc
    const message = `assoc
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = assoc === namedExport && assoc === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof assoc.signature
    const message = 'assoc.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('assoc functionality', assert => {
  {
    const setBar = assoc('bar')('bar')
    const expected = {
      foo: 'foo',
      bar: 'bar'
    }
    const actual = setBar({
      foo: 'foo'
    })
    const message = inspect`Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = { a: 1, b: 2, c: 3 }
    const actual = assoc('c')(3)({ a: 1, b: 2 })
    const message = inspect`Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
