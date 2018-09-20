import test from 'tape'
import equal from './equal.mjs'

test('equal function', t => {
  t.equal(typeof equal, 'function', 'equal should be a function')
  t.equal(
    typeof equal.signature,
    'string',
    'equal.signature should be a string'
  )

  const equalsA = equal('a')

  {
    const actual = typeof equalsA
    const expected = 'function'
    const message = 'equal(a) should create a function'
    t.equal(actual, expected, message)
  }

  {
    const actual = equalsA('a')
    const expected = true
    const message = `equals('a')('a') === true`
    t.equal(actual, expected, message)
  }

  {
    const actual = equalsA('b')
    const expected = false
    const message = `equals('a')('b') === false`
    t.equal(actual, expected, message)
  }

  t.end()
})
