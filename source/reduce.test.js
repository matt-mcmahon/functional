import test from 'tape'
import { inspect } from './util/index.js'
import { reduce as namedExport, default as reduce } from './reduce.js'
import { reduce as indexExport } from './index'

test('reduce module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof reduce
    const message = inspect`typeof reduce
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = reduce === namedExport && reduce === indexExport
    const message = inspect`Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof reduce.signature
    const message = inspect`typeof reduce.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('reduce module: implementation', assert => {
  {
    const add = (x, y) => x + y
    const expected = 9
    const actual = reduce(add)(0)([1, 3, 5])
    const message = inspect`reducing [1, 3, 5]
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
    const message = inspect`reducing 'a', ['b', 'c']
      is ${actual},
      expected ${expected}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'a'
    const actual = reduce(concat)(a)([])
    const message = inspect`reducing a, []
      is ${actual},
      expected ${expected}`
    assert.deepEqual(actual, expected, message)
  }

  const thrower = () => {
    throw Error('I should not be called')
  }

  {
    const accumulator = 'original accumulator'
    const expected = accumulator
    const actual = reduce(thrower)(accumulator)([])
    const message = inspect`reducing an empty array should yield the original accumulator`
    assert.strictEqual(actual, expected, message)
  }

  {
    const accumulator = 'original accumulator'
    const expected = accumulator
    const actual = reduce(thrower)(accumulator)(456)
    const message = inspect`reducing number should yield the original accumulator`
    assert.strictEqual(actual, expected, message)
  }

  {
    const accumulator = 'original accumulator'
    const expected = accumulator
    const actual = reduce(thrower)(accumulator)({ value: 'not reducable' })
    const message = inspect`reducing object should yield the original accumulator`
    assert.strictEqual(actual, expected, message)
  }

  assert.end()
})
