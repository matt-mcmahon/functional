'use strict'

const tap = fun => value => {
  fun(value)
  return value
}
tap.signature = `tap :: (a -> b) -> a -> a`

module.exports = { tap }
