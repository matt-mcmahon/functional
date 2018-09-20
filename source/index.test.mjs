import test from 'tape'
import functional from './index.mjs'

test('functional exports expected methods', t => {
  const expected = [
    'bind',
    'clone',
    'compose',
    // 'equal',
    'F',
    'id',
    'merge',
    'pipe',
    'T',
    'tap'
  ].sort()
  const actual = Object.keys(functional).sort()
  t.isEquivalent(actual, expected)
  t.end()
})
