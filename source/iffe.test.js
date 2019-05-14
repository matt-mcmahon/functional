import test from 'tape'
import { inspect } from './util/index.js'
import { iffe as namedExport, default as iffe } from './iffe.js'
import { iffe as indexExport } from './index'

test('iffe module: declaration', assert => {
  {
    const expected = 'function'
    const actual = typeof iffe
    const message = inspect`typeof iffe
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = iffe === namedExport && iffe === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'string'
    const actual = typeof iffe.signature
    const message = inspect`typeof iffe.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test('iffe module: implementation', assert => {
  {
    const fun = (a, b, c) => a + b + c
    const actual = iffe(fun)(1, 3, 5)
    const expected = 9
    const message =
      'iffe(fun, ...args) should contain the result of calling fun'
    assert.equal(actual, expected, message)
  }

  {
    const fun = (a, b) => {
      const c = a + b
      return d => c + d
    }
    const add4 = iffe(fun)(1, 3)

    {
      const actual = typeof add4
      const expected = 'function'
      const message = 'iffe(fun) should be a function'
      assert.equal(actual, expected, message)
    }

    {
      const actual = add4(5)
      const expected = 9
      const message = 'iffe should have internal state'
      assert.equal(actual, expected, message)
    }
  }
  assert.end()
})
