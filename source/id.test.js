import test from 'tape'
import { inspect } from './util/index.js'
import { id as namedExport, default as id } from './id.js'
import { id as indexExport } from './index'

test('id module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof id
    const message = inspect`typeof id
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = id === namedExport && id === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof id.signature
    const message = inspect`typeof id.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('id module: implementation', assert => {
  const foo = {}
  const idOfFoo = id(foo)
  {
    const actual = typeof idOfFoo
    const expected = 'function'
    const message = 'id(foo) should create a function'
    assert.equal(actual, expected, message)
  }
  {
    const actual = idOfFoo()
    const expected = foo
    const message = 'invoking id(foo) should return the object foo'
    assert.equal(actual, expected, message)
  }
  assert.end()
})
