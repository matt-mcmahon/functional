import test from 'tape'
import { inspect } from './util/index.js'
import { ifElse as namedExport, default as ifElse } from './ifElse.js'
import { ifElse as indexExport } from './index'

test('ifElse module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof ifElse
    const message = inspect`typeof ifElse
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = ifElse === namedExport && ifElse === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof ifElse.signature
    const message = inspect`typeof ifElse.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('ifElse module: implementation', assert => {
  const isTrue = condition => condition === true
  const boolToString = ifElse(isTrue)(() => 'true')(() => 'false')

  {
    const expected = 'true'
    const actual = boolToString(true)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'false'
    const actual = boolToString(false)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'false'
    const actual = boolToString(1)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'false'
    const actual = boolToString(0)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
