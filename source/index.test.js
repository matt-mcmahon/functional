import test from 'tape'
import * as functional from './index'

test('functional exports expected methods', t => {
  const expected = [
    'bind',
    'clone',
    'compose',
    'equal',
    'F',
    'id',
    'map',
    'merge',
    'pipe',
    'prop',
    'sort',
    'T',
    'tap'
  ].sort()
  const actual = Object.keys(functional).sort()
  t.isEquivalent(actual, expected)
  t.end()
})
