import test from "tape"
import { inspect } from "./util/index.js"
import { bind as namedExport, default as bind } from "./bind.js"
import { bind as indexExport } from "./index"

test("bind module: declaration", assert => {
  {
    const expected = "function"
    const actual = typeof bind
    const message = inspect`typeof bind
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = true
    const actual = bind === namedExport && bind === indexExport
    const message = `Named, Default, and Index exports should all be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = "string"
    const actual = typeof bind.signature
    const message = inspect`typeof bind.signature
      should be ${expected},
      is ${actual}`
    assert.deepEqual(actual, expected, message)
  }

  assert.end()
})

test("bind module: implementation", assert => {
  const objectWith = {
    method(value) {
      this.foo = value
      return "method called"
    },
  }

  const bind1 = bind(objectWith.method)

  assert.equal(
    typeof bind1,
    "function",
    "bind1 should be a function (1 applied arguments)"
  )

  const boundTarget = {
    bar: "bar",
  }

  const bind2 = bind1(boundTarget)

  assert.equal(
    typeof bind2,
    "function",
    "bind2 should be a function (2 applied arguments)"
  )

  const bind3 = bind2("foo")

  assert.equal(
    bind3,
    "method called",
    "bind3 should be a string (final result)"
  )

  const expected = {
    foo: "foo",
    bar: "bar",
  }

  assert.deepEqual(
    boundTarget,
    expected,
    'boundTarget object should have property "foo"'
  )

  const misdirection = {
    bind1,
  }

  assert.deepEqual(
    misdirection,
    {
      bind1,
    },
    'misdirected object should NOT have a "baz" property'
  )

  assert.end()
})
