import { isRequired, sign } from './index.js'
import test from 'tape'

test('index module', assert => {
  {
    const expected = 'function'
    const actual = typeof isRequired
    const message = `isRequired
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'function'
    const actual = typeof sign
    const message = `sign
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const f = a => a
    sign('id')(f)
    const expected = 'id'
    const actual = f.signature
    const message = `f.signature
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const message = `executing isRequired should throw`
    assert.throws(isRequired, message)
  }

  assert.end()
})
