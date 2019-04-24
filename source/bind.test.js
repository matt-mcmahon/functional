import { bind as namedExport, default as bind } from './bind.js'
import test from 'tape'

test('bind module', assert => {
  {
    const expected = 'function'
    const actual = typeof bind
    const message = `bind
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = 'function'
    const actual = typeof namedExport
    const message = `namedExport
      is a "${actual}",
      expected "${expected}"`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = bind === namedExport
    const message = `Named and Default exports should be identical`
    assert.deepEqual(actual, expected, message)
  }

  const objectWith = {
    method(value) {
      this.foo = value
      return 'method called'
    }
  }

  const bind1 = bind(objectWith.method)

  assert.equal(
    typeof bind1,
    'function',
    'bind1 should be a function (1 applied arguments)'
  )

  const boundTarget = {
    bar: 'bar'
  }

  const bind2 = bind1(boundTarget)

  assert.equal(
    typeof bind2,
    'function',
    'bind2 should be a function (2 applied arguments)'
  )

  const bind3 = bind2('foo')

  assert.equal(
    bind3,
    'method called',
    'bind3 should be a string (final result)'
  )

  const expected = {
    foo: 'foo',
    bar: 'bar'
  }

  assert.deepEqual(
    boundTarget,
    expected,
    'boundTarget object should have property "foo"'
  )

  const misdirection = {
    bind1
  }

  assert.deepEqual(
    misdirection,
    {
      bind1
    },
    'misdirected object should NOT have a "baz" property'
  )

  assert.end()
})
