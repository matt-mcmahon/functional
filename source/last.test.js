import test from 'tape'
import { inspect } from './util/index.js'
import { last as namedExport, default as last } from './last.js'
import { last as indexExport } from './index'

test('last module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof last
    const message = inspect`typeof last
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = last === namedExport && last === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof last.signature
    const message = inspect`typeof last.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('last module: implementation', assert => {
  {
    const value = ['a', 'b', 'c']
    const expected = 'c'
    const actual = last(value)
    const message = inspect`last ${value}
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const value = []
    const expected = undefined
    const actual = last(value)
    const message = inspect`last ${value}
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
