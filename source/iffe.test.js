import test from 'tape'
import iffe from './iffe'
import { iffe as namedExport } from './index'

test('iffe function', t => {
  t.equal(typeof iffe, 'function', 'iffe should be a function')
  t.equal(typeof iffe.signature, 'string', 'iffe.signature should be a string')
  t.equal(iffe, namedExport, 'iffe and namedExport should be identical')

  {
    const fun = (a, b, c) => a + b + c
    const actual = iffe(fun, 1, 3, 5)
    const expected = 9
    const message =
      'iffe(fun, ...args) should contain the result of calling fun'
    t.equal(actual, expected, message)
  }

  {
    const fun = (a, b) => {
      const c = a + b
      return d => c + d
    }
    const add4 = iffe(fun, 1, 3)

    {
      const actual = typeof add4
      const expected = 'function'
      const message = 'iffe(fun) should be a function'
      t.equal(actual, expected, message)
    }

    {
      const actual = add4(5)
      const expected = 9
      const message = 'iffe should have internal state'
      t.equal(actual, expected, message)
    }
  }
  t.end()
})
