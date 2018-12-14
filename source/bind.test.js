import bind from './bind'
import test from 'tape'

test('bind module', t => {
  t.equal(typeof bind, 'function', 'bind should be a function')

  const objectWith = {
    method(value) {
      this.foo = value
      return 'method called'
    }
  }

  const bind1 = bind(objectWith.method)

  t.equal(
    typeof bind1,
    'function',
    'bind1 should be a function (1 applied arguments)'
  )

  const boundTarget = {
    bar: 'bar'
  }

  const bind2 = bind1(boundTarget)

  t.equal(
    typeof bind2,
    'function',
    'bind2 should be a function (2 applied arguments)'
  )

  const bind3 = bind2('foo')

  t.equal(bind3, 'method called', 'bind3 should be a string (final result)')

  const expected = {
    foo: 'foo',
    bar: 'bar'
  }

  t.deepEqual(
    boundTarget,
    expected,
    'boundTarget object should have property "foo"'
  )

  const misdirection = {
    bind1
  }

  t.deepEqual(
    misdirection,
    {
      bind1
    },
    'misdirected object should NOT have a "baz" property'
  )

  t.end()
})
