'use strict'

const test = require('tape')
const { F } = require('./F')

test('F function', t => {
  t.equal(typeof F, 'function', 'F should be a function')
  t.equal(typeof F.signature, 'string', 'F.signature should be a string')
  {
    const actual = F()
    const expected = false
    const message = 'F() should return false'
    t.equal(actual, expected, message)
  }
  {
    const actual = F(true)
    const expected = false
    const message = 'F(false) should return false'
    t.equal(actual, expected, message)
  }
  t.end()
})
