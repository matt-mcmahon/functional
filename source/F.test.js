import { F as namedExport, default as F } from './F.js'
import test from 'tape'

test('F module', assert => {
  {
    const expected = 'function'
    const actual = typeof F
    const message = `F
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'function'
    const actual = typeof namedExport
    const message = `namedExport
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = F === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof F.signature
    const message = 'F.signature should be a string'
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('F function', t => {
  t.equal(typeof F, 'function', 'F should be a function')
  t.equal(typeof F.signature, 'string', 'F.signature should be a string')
  {
    const actual = F()
    const expected = false
    const message = 'F() should return false'
    t.equal(actual, expected, message)
  }
  {
    const actual = F(true)
    const expected = false
    const message = 'F(false) should return false'
    t.equal(actual, expected, message)
  }
  t.end()
})
