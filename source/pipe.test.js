import test from 'tape'
import { inspect } from './util/index.js'
import { pipe as namedExport, default as pipe } from './pipe.js'
import { pipe as indexExport } from './index'

test('pipe module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof pipe
    const message = inspect`typeof pipe
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = pipe === namedExport && pipe === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof pipe.signature
    const message = inspect`typeof pipe.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('pipe module: implementation', assert => {
  const f = x => x + 1
  const g = x => 2 * x
  const actual = pipe(
    f,
    g
  )(3)
  assert.equal(actual, 8, '2 * (3 + 1) == 8')
  assert.notEqual(actual, 7, '2 * (3 + 1) != 7')
  assert.end()
})
