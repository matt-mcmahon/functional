'use strict'

module.exports = Object.assign(
  {},
  require('./pipe'),
  require('./tap'),
  require('./compose'),
  require('./clone'),
  require('./bind'),
  require('./merge')
)
