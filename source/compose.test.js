import test from 'tape'
import compose from './compose'

test('compose module', t => {
  t.equal(typeof compose, 'function', 'compose should be a function')
  t.equal(
    typeof compose.signature,
    'string',
    'compose.signature should be a string'
  )
  t.end()
})

test('compose applies right to left', t => {
  const f = x => x + 1
  const g = x => 2 * x
  const actual = compose(
    f,
    g
  )(3)
  t.notEqual(actual, 8, '(2 * 3) + 1 != 8')
  t.equal(actual, 7, '(2 * 3) + 1 == 7')
  t.end()
})
