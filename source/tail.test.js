import tail from './tail'
import { tail as namedExport } from './index.js'
import test from 'tape'

test('tail module', assert => {
  {
    const expected = 'function'
    const actual = typeof tail
    const message = `tail
      is a "${actual}",
      expected ${expected}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'function'
    const actual = typeof namedExport
    const message = `namedExport
      is a "${actual}",
      expected ${expected}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = tail === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = ['b', 'c']
    const actual = tail(['a', 'b', 'c'])
    const message = `tail(["a", "b", "c"])
      is [${actual.map(v => `"${v}"`).join(', ')}],
      expected [${expected.map(v => `"${v}"`).join(', ')}]`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = []
    const actual = tail(['a'])
    const message = `tail(["a")
      is [${actual.map(v => `"${v}"`).join(', ')}],
      expected [${expected.map(v => `"${v}"`).join(', ')}]`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = []
    const actual = tail([])
    const message = `tail([])
      is [${actual.map(v => `"${v}"`).join(', ')}],
      expected [${expected.map(v => `"${v}"`).join(', ')}]`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
