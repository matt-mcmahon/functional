'use strict'

const { merge } = require('./merge')
const test = require('tape')

test('merge module', t => {
  t.equal(typeof merge, 'function', 'merge should be a function')

  const first = {
    a: 1,
    b: 1
  }

  const second = {
    b: 2
  }

  const merge1 = merge(first)
  t.equal(
    typeof merge1,
    'function',
    'merge(...) should return a partially applied function'
  )

  const actual = merge1(second)

  const expected = {
    a: 1,
    b: 2
  }

  t.deepEqual(actual, expected, '{ b: 2 } should overwrite { b: 1 }')

  t.notEqual(
    expected,
    actual,
    'expanded object should not be the same as the initial object'
  )
  t.end()
})
