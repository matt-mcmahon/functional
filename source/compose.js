'use strict'

const compose = (...functions) => value =>
  functions.reduceRight((v, f) => f(v), value)
compose.signature = `compose :: [a -> a] -> (a -> a)`

module.exports = { compose }
