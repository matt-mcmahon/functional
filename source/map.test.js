import { map } from './map'
import test from 'tape'

test('map module', t => {
  const as = [1, 2, 3]
  const bs = ['1', '2', '3']
  const fun = a => a.toString()

  {
    const actual = map(fun)(as)
    const expected = bs
    const message = 'Numbers should be mapped to strings'
    t.deepEqual(actual, expected, message)
  }

  {
    const actual = map(fun)([])
    const expected = []
    const message = 'Should work with an empty mappable.'
    t.deepEqual(actual, expected, message)
  }

  t.end()
})
