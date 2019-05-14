import test from 'tape'
import * as functional from './index'

test('util exports expected modules', t => {
  const expected = ['inspect', 'isRequired', 'sign'].sort()
  const actual = Object.keys(functional).sort()
  t.isEquivalent(actual, expected)
  t.end()
})
