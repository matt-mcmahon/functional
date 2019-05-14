import test from 'tape'
import { inspect } from './util/index.js'
import { has as namedExport, default as has } from './has.js'
import { has as indexExport } from './index'

test('has module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof has
    const message = inspect`typeof has
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = has === namedExport && has === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof has.signature
    const message = inspect`typeof has.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('has module: implementation', assert => {
  const object = { a: 'a' }
  const hasA = has('a')

  {
    const expected = true
    const actual = has('a')(object)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = false
    const actual = hasA({ b: 'b' })
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
