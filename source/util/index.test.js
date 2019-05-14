import test from 'tape'
import * as functional from './index'

test('functional exports expected methods', t => {
  const expected = ['inspect', 'isRequired', 'sign'].sort()
  const actual = Object.keys(functional).sort()
  t.isEquivalent(actual, expected)
  t.end()
})
