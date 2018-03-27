const test = require('tape')
const functional = require('./')

test('functional exports expected methods', t => {
  const expected = ['clone', 'compose', 'pipe', 'tap'].sort()
  const actual = Object.keys(functional).sort()
  t.isEquivalent(actual, expected)
  t.end()
})
