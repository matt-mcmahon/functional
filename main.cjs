// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
require = require("esm")(module, {
  mode: "auto",
  debug: true,
  sourceMap: true,
})
module.exports = require("./module.js")
