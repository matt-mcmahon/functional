import test from 'tape'
import { inspect } from './util/index.js'
import { isEmpty as namedExport, default as isEmpty } from './isEmpty.js'
import { isEmpty as indexExport } from './index'

test('isEmpty module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof isEmpty
    const message = inspect`typeof isEmpty
      should be ${expected},
      is ${actual}`
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
    const message = inspect`typeof isEmpty.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('isEmpty module: implementation', assert => {
  const runTest = ([value, expected]) => {
    const actual = isEmpty(value)
    const message = inspect`isEmpty(${value})
      should be ${expected},
      is ${actual}`
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
