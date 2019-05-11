import test from 'tape'
import * as functional from './index'

test('functional exports expected methods', t => {
  const expected = [
    'always',
    'assoc',
    'bind',
    'both',
    'clone',
    'complement',
    'compose',
    'defaultTo',
    'either',
    'equals',
    'defaultTo',
    'either',
    'equal',
    'F',
    'has',
    'head',
    'id',
    'ifElse',
    'iffe',
    'init',
    'last',
    'map',
    'merge',
    'pipe',
    'prop',
    'reduce',
    'reduceRight',
    'sort',
    'T',
    'tail',
    'tap'
  ].sort()
  const actual = Object.keys(functional).sort()
  t.isEquivalent(actual, expected)
  t.end()
})
