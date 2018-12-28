import reduceRight from './reduceRight'
import { reduceRight as namedExport } from './index'
import test from 'tape'

test('reduceRight module', assert => {
  {
    const expected = 'function'
    const actual = typeof reduceRight
    const message = `reduceRight
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
    const actual = reduceRight === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const add = (x, y) => x + y
    const expected = 9
    const actual = reduceRight(add)(0)([1, 3, 5])
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
    const expected = 'acb'
    const actual = reduceRight(concat)(a)([b, c])
    const message = `reducing "a", ["b", "c"]
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'a'
    const actual = reduceRight(concat)(a)([])
    const message = `reducing a, []
      is "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})
