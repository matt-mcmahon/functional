'use strict'

const bind = method => object => (...args) => method.apply(object, args)

module.exports = { bind }
