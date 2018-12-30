import reduce from './reduce'
import { reduce as namedExport } from './index'
import test from 'tape'

test('reduce module', assert => {
  {
    const expected = 'function'
    const actual = typeof reduce
    const message = `reduce
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
    const actual = reduce === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const add = (x, y) => x + y
    const expected = 9
    const actual = reduce(add)(0)([1, 3, 5])
    const message = `reducing [1, 3, 5]
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  const a = 'a'
  const b = 'b'
  const c = 'c'
  const concat = (x = '', y = '') => x + y

  {
    const expected = 'abc'
    const actual = reduce(concat)(a)([b, c])
    const message = `reducing "a", ["b", "c"]
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'a'
    const actual = reduce(concat)(a)([])
    const message = `reducing a, []
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  const thrower = () => {
    throw Error('I should not be called')
  }

  {
    const accumulator = 'original accumulator'
    const expected = accumulator
    const actual = reduce(thrower)(accumulator)([])
    const message = `reducing an empty array should yield the original accumulator`
    assert.strictEqual(actual, expected, message)
  }

  {
    const accumulator = 'original accumulator'
    const expected = accumulator
    const actual = reduce(thrower)(accumulator)(456)
    const message = `reducing number should yield the original accumulator`
    assert.strictEqual(actual, expected, message)
  }

  {
    const accumulator = 'original accumulator'
    const expected = accumulator
    const actual = reduce(thrower)(accumulator)({ value: 'not reducable' })
    const message = `reducing object should yield the original accumulator`
    assert.strictEqual(actual, expected, message)
  }

  assert.end()
})
