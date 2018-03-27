'use strict'

const pipe = (...functions) => value => functions.reduce((v, f) => f(v), value)
pipe.signature = `pipe :: [a -> a] -> (a -> a)`

module.exports = { pipe }
