import test from 'tape'
import { inspect } from './util/index.js'
import { head as namedExport, default as head } from './head.js'
import { head as indexExport } from './index'

test('head module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof head
    const message = inspect`typeof head
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = head === namedExport && head === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof head.signature
    const message = inspect`typeof head.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('head module: implementation', assert => {
  {
    const expected = 'a'
    const actual = head(['a', 'b', 'c'])
    const message = `head ["a", "b", "c"]
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = undefined
    const actual = head([])
    const message = `head []
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
