import { defaultTo as namedExport, default as defaultTo } from './defaultTo.js'
import { defaultTo as indexExport } from './index'
import test from 'tape'

test('defaultTo module', assert => {
  {
    const expected = 'function'
    const actual = typeof defaultTo
    const message = `defaultTo
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = defaultTo === namedExport && defaultTo === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof defaultTo.signature
    const message = 'defaultTo.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('defaultTo functionality', assert => {
  const f = defaultTo('default')
  {
    const expected = false
    const actual = f(false)
    const message = `false is not replaced, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 0
    const actual = f(0)
    const message = `zero (0) is not replaced, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'default'
    const actual = f(null)
    const message = `null is replaced, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'default'
    const actual = f(undefined)
    const message = `undefined is replaced, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'default'
    const actual = f(NaN)
    const message = `NaN is replaced, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  const defaultTo42 = defaultTo(42)

  {
    const expected = 42
    const actual = defaultTo42(null)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 42
    const actual = defaultTo42(undefined)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = false
    const actual = defaultTo42(false)
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'Functional'
    const actual = defaultTo42('Functional')
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 42
    const actual = defaultTo42(parseInt('string')) //=> 42
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
