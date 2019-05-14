import test from 'tape'
import { inspect } from './util/index.js'
import { compose as namedExport, default as compose } from './compose.js'
import { compose as indexExport } from './index'

test('compose module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof compose
    const message = inspect`typeof compose
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = compose === namedExport && compose === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof compose.signature
    const message = inspect`typeof compose.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('compose module: implementation', assert => {
  {
    const f = x => x + 1
    const g = x => 2 * x
    const actual = compose(
      f,
      g
    )(3)
    assert.notEqual(
      actual,
      8,
      `compose should apply right to left (2 * 3) + 1 != 8`
    )
    assert.equal(
      actual,
      7,
      `'compose should apply right to left' (2 * 3) + 1 == 7`
    )
  }

  assert.end()
})
