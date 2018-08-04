import test from 'tape'
import functional from './index.mjs'

test('functional exports expected methods', t => {
  const expected = ['bind', 'clone', 'compose', 'merge', 'pipe', 'tap'].sort()
  const actual = Object.keys(functional).sort()
  t.isEquivalent(actual, expected)
  t.end()
})
