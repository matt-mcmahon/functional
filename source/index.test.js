import test from 'tape'
import * as functional from './index'

test('functional exports expected methods', t => {
  const expected = [
    'bind',
    'clone',
    'compose',
    'equal',
    'F',
    'head',
    'id',
    'iffe',
    'map',
    'merge',
    'pipe',
    'prop',
    'sort',
    'T',
    'tail',
    'tap'
  ].sort()
  const actual = Object.keys(functional).sort()
  t.isEquivalent(actual, expected)
  t.end()
})
