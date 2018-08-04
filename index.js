// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
require = require('esm')(module, {
  mode: 'strict',
  debug: true,
  sourceMap: true
})
module.exports = require('./source/index.mjs')
