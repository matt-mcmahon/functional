import test from 'tape'
import * as functional from './index'

test('functional exports expected modules', t => {
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
    'F',
    'has',
    'head',
    'identity',
    'ifElse',
    'iffe',
    'init',
    'isEmpty',
    'isNil',
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
