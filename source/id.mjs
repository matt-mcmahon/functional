'use strict'

const id = value => () => value
id.signature = 'id :: a => a'

module.exports = { id }
