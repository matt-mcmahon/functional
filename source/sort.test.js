import { sort } from './sort'
import test from 'tape'

test('sort module', t => {
  const as = [3, 5, 9, 1, 0, 22]
  const bs = [0, 1, 3, 5, 9, 22]
  const fun = sort((a, b) => a - b)

  {
    const actual = fun(as)
    const expected = bs
    const message = 'should sort numbers'
    t.deepEqual(actual, expected, message)
  }

  {
    const actual = fun([])
    const expected = []
    const message = 'Should work with an empty sortable.'
    t.deepEqual(actual, expected, message)
  }

  t.end()
})
