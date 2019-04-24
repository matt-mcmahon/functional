import { strict } from 'assert'
import { clone as namedExport, default as clone } from './clone.js'
import test from 'tape'

test('clone module', assert => {
  {
    const expected = 'function'
    const actual = typeof clone
    const message = `clone
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
    const actual = clone === namedExport
    const message = `namedExport and default export should be identical`
    assert.deepEqual(actual, expected, message)
  }

  {
    const expected = { foo: 'foo', bar: 'bar' }
    const actual = clone(expected)
    const message = `clone flat objects`
    assert.deepEqual(actual, expected, message)
    assert.notEqual(actual, expected, `cloned object should be a new object`)
  }

  {
    const expected = {
      foo: 'foo',
      bar: {
        baz: 'baz'
      }
    }
    const actual = clone(expected)
    assert.deepEqual(
      actual,
      expected,
      `clone's nested properties should be equivelent`
    )
    assert.notEqual(
      actual.bar,
      expected.bar,
      `clone's nested object should be a new object`
    )
  }

  {
    const expected = ['foo', 'bar', 'bax']
    const actual = clone(expected)
    assert.deepEqual(actual, expected, `should clone equivelent flat array`)
    assert.notEqual(actual, expected, `clone array should be a new array`)
  }

  {
    const expected = [['foo', 'bar'], ['baz', 'qux']]
    const actual = clone(expected)
    assert.deepEqual(actual, expected, `should clone nested arrays`)
    assert.notEqual(
      expected[0],
      actual[0],
      `nested array 0 should be a new array`
    )
    assert.notEqual(
      expected[1],
      actual[1],
      `nested array 1 should be a new array`
    )
  }

  {
    const expected = {
      foo: ['foo'],
      bar: [null]
    }
    const actual = clone(expected)
    assert.deepEqual(actual, expected, 'clone objects containing arrays')
    assert.notEqual(
      actual.foo,
      expected.foo,
      `nested array "foo" should be new array`
    )
    assert.notEqual(
      actual.bar,
      expected.bar,
      `nested array "bar" should be new array`
    )
  }

  {
    const expected = [{ foo: 1 }, { bar: 2 }]
    const actual = clone(expected)
    assert.deepEqual(actual, expected)
    assert.notEqual(actual[0], expected[0], `index 0 should be a new object`)
    assert.notEqual(actual[1], expected[1], `index 1 should be a new object`)
  }

  {
    // test('clone with circular references', assert => {
    const expected = { bar: 'bar' }
    expected.bazInArray = [expected]
    expected.bazAsProperty = expected
    const actual = clone(expected)

    assert.doesNotThrow(() => {
      // Cannot use tape's deep equal. It is not circular reference safe.
      strict.deepEqual(actual, expected)
    }, `should clone circular references`)

    assert.notEqual(
      actual.bazInArray,
      expected.bazInArray,
      `clone's bazInArray should be a new array`
    )

    assert.notEqual(
      actual.bazAsProperty,
      expected.bazAsProperty,
      `clone's bazAsProperty should be a new object`
    )

    assert.notEqual(
      actual.bazInArray[0],
      expected.bazInArray[0],
      `clone's bazInArray[0] should be a new object`
    )

    assert.equal(
      actual.bazInArray[0],
      actual,
      `clone's bazInArray[0] should be the clone`
    )

    assert.equal(
      actual.bazAsProperty,
      actual,
      `clone's bazAsProperty should be the clone`
    )
  }

  {
    const expected = new Date()
    const actual = clone(expected)
    const message = `Should clone dates`
    assert.equal(actual.toString(), expected.toString(), message)
    assert.notEqual(actual, expected, message)
  }

  assert.end()
})

/**
 * Adapted from:
 *
 *   https://github.com/thebearingedge/deep-clone/blob/master/test/index.js
 *
 *
 *
 * Original License:
 * ============================================================================
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Tim Davis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 * ============================================================================
 */
