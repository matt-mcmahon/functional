'use strict'

const test = require('tape')
const { id } = require('./id')

test('id function', t => {
  t.equal(typeof id, 'function', 'id should be a function')
  t.equal(
    typeof id.signature,
    'string',
    'id.signature should be a string'
  )
  const foo = {}
  const idOfFoo = id(foo)
  {
    const actual = typeof idOfFoo
    const expected = 'function'
    const message = 'id(foo) should create a function'
    t.equal(actual, expected, message)
  }
  {
    const actual = idOfFoo()
    const expected = foo
    const message = 'invoking id(foo) should return the object foo'
    t.equal(actual, expected, message)
  }
  t.end()
})
