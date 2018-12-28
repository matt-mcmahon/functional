import init from './init'
import { init as namedExport } from './index.js'
import test from 'tape'

test('init module', assert => {
  {
    const expected = 'function'
    const actual = typeof init
    const message = `init
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
    const actual = init === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = ['a', 'b']
    const actual = init(['a', 'b', 'c'])
    const message = `init(["a", "b", "c"])
      is [${actual.map(v => `"${v}"`).join(', ')}],
      expected [${expected.map(v => `"${v}"`).join(', ')}]`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = []
    const actual = init([])
    const message = `init([])
      is [${actual.map(v => `"${v}"`).join(', ')}],
      expected [${expected.map(v => `"${v}"`).join(', ')}]`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
