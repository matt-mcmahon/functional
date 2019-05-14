import test from 'tape'
import { inspect } from './util/index.js'
import { both as namedExport, default as both } from './both.js'
import { both as indexExport } from './index'

test('both module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof both
    const message = inspect`typeof both
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = both === namedExport && both === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof both.signature
    const message = inspect`typeof both.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('both module: implementation', assert => {
  const gt10 = v => v > 10
  const lt20 = v => v < 20
  const between10and20 = both(gt10)(lt20)

  {
    const value = 15
    const expected = true
    const actual = between10and20(value)
    const message = inspect`is ${value} between 10 and 20?
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const value = 30
    const expected = false
    const actual = between10and20(value)
    const message = inspect`is ${value} between 10 and 20?
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    assert.doesNotThrow(() => {
      const first = v => false
      const second = v => {
        throw new Error('both should never execute me')
      }
      both(first)(second)(true)
    }, 'should short-circuit execution')
  }

  assert.end()
})
