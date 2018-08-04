import test from 'tape'
import { pipe } from './pipe.mjs'

test('pipe module', t => {
  t.equal(typeof pipe, 'function', 'pipe should be a function')
  t.equal(typeof pipe.signature, 'string', 'pipe.signature should be a string')
  t.end()
})

test('pipe applies left to right', t => {
  const f = x => x + 1
  const g = x => 2 * x
  const actual = pipe(f, g)(3)
  t.equal(actual, 8, '2 * (3 + 1) == 8')
  t.notEqual(actual, 7, '2 * (3 + 1) != 7')
  t.end()
})
