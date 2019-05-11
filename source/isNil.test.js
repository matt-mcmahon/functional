import { isNil as namedExport, default as isNil } from './isNil.js'
import { isNil as indexExport } from './index'
import test from 'tape'
import { inspect } from 'util'

test('isNil module', assert => {
  {
    const expected = 'function'
    const actual = typeof isNil
    const message = `isNil
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = isNil === namedExport && isNil === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof isNil.signature
    const message = 'isNil.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('isNil functionality', assert => {
  const runTest = ([value, expected]) => {
    const actual = isNil(value)
    const message = `isNil(${inspect(value)}) → ${expected}, got ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  ;[[null, true], [undefined, true], [0, false], [[], false]].forEach(runTest)

  assert.end()
})
