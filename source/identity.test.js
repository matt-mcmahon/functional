import test from 'tape'
import { inspect } from './util/index.js'
import { identity as namedExport, default as identity } from './identity.js'
import { identity as indexExport } from './index'

test('identity module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof identity
    const message = inspect`typeof identity
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = identity === namedExport && identity === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof identity.signature
    const message = inspect`typeof identity.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('identity module: implementation', assert => {
  const foo = {}
  {
    const actual = identity(foo)
    const expected = foo
    const message = 'invoking identity(foo) should return the object foo'
    assert.equal(actual, expected, message)
  }
  assert.end()
})
