import { isEmpty as namedExport, default as isEmpty } from './isEmpty.js'
import { isEmpty as indexExport } from './index'
import { inspect } from './util'
import test from 'tape'

test('isEmpty module', assert => {
  {
    const expected = 'function'
    const actual = typeof isEmpty
    const message = `isEmpty
      is a "${actual}",
      expected "${expected}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = isEmpty === namedExport && isEmpty === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof isEmpty.signature
    const message = 'isEmpty.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('isEmpty functionality', assert => {
  const runTest = ([value, expected]) => {
    const actual = isEmpty(value)
    const message = inspect`isEmpty(${value}) → ${expected}, got ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  ;[
    [[1, 2, 3], false],
    [[], true],
    ['', true],
    [null, false],
    [undefined, false],
    [{}, true],
    [{ length: 0 }, false]
  ].forEach(runTest)

  assert.end()
})
