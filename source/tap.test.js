import test from 'tape'
import { inspect } from './util/index.js'
import { tap as namedExport, default as tap } from './tap.js'
import { tap as indexExport } from './index'

test('tap module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof tap
    const message = inspect`typeof tap
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = tap === namedExport && tap === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof tap.signature
    const message = inspect`typeof tap.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('tap module: implementation', assert => {
  const value = 3
  const actual = tap(x => x * 2)(value)
  const expected = value
  const message = inspect`shouldn't modify value,
    should yield ${expected},
    yields ${actual}`
  assert.equal(actual, expected, message)
  assert.end()
})
