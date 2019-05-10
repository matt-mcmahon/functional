import { always as namedExport, default as always } from './always.js'
import { always as indexExport } from './index'
import test from 'tape'

test('always module', assert => {
  {
    const expected = 'function'
    const actual = typeof always
    const message = `always
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = always === namedExport && always === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof always.signature
    const message = 'always.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('always functionality', assert => {
  {
    const expected = { foo: 'foo' }
    const actual = always(expected)({ bar: 'bar' })
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
