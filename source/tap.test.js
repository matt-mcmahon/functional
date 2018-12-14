import { tap } from './tap'
import test from 'tape'

test('tap module', t => {
  t.equal(typeof tap, 'function', 'tap should be a function')
  t.equal(typeof tap.signature, 'string', 'tap.signature should be a string')
  t.end()
})

test('tap executes a function, returns original value', t => {
  const actual = tap(x => x * 2)(3)
  const expected = 3
  t.equal(actual, expected, 'original value should not change')
  t.end()
})
