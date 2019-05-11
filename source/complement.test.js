import {
  complement as namedExport,
  default as complement
} from './complement.js'
import { complement as indexExport } from './index'
import test from 'tape'

test('complement module', assert => {
  {
    const expected = 'function'
    const actual = typeof complement
    const message = `complement
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = complement === namedExport && complement === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof complement.signature
    const message = 'complement.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('complement functionality', assert => {
  {
    const expected = true
    const actual = complement(v => v)(false)
    const message = `complement should pass through argument, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = complement(() => false)('ignored')
    const message = `complement of false is true, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = false
    const actual = complement(() => 'truthy')('ignored')
    const message = `complement of truthy value is false, got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = complement(() => 0)('ignored')
    const message = `Should be "${expected}", got "${actual}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
