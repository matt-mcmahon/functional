import test from 'tape'
import { T } from './T'

test('T function', t => {
  t.equal(typeof T, 'function', 'T should be a function')
  t.equal(typeof T.signature, 'string', 'T.signature should be a string')
  {
    const actual = T()
    const expected = true
    const message = 'T() should return true'
    t.equal(actual, expected, message)
  }
  {
    const actual = T(false)
    const expected = true
    const message = 'T(false) should return true'
    t.equal(actual, expected, message)
  }
  t.end()
})
