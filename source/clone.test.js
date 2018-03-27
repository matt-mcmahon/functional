'use strict'

const assert = require('assert').strict
const { clone } = require('./clone.js')
const test = require('tape')

test('clone flat objects', t => {
  const expected = { foo: 'foo', bar: 'bar' }
  const actual = clone(expected)
  t.deepEqual(actual, expected)
  t.notEqual(actual, expected)
  t.end()
})

test('clone nested objects', t => {
  const obj = {
    foo: 'foo',
    bar: {
      baz: 'baz'
    }
  }
  const copy = clone(obj)
  t.deepEqual(copy.bar, obj.bar)
  t.notEqual(copy.bar, obj.bar)
  t.end()
})

test('clone flat arrays', t => {
  const arr = ['foo', 'bar', 'baz']
  const copy = clone(arr)
  t.deepEqual(copy, arr)
  t.notEqual(copy, arr)
  t.end()
})

test('clone multi-dimensional arrays', t => {
  const arr = [['foo', 'bar'], ['baz', 'qux']]
  const copy = clone(arr)
  t.deepEqual(copy, arr)
  t.notEqual(copy, arr)
  t.deepEqual(copy[0], arr[0])
  t.notEqual(copy[0], arr[0])
  t.deepEqual(copy[1], arr[1])
  t.notEqual(copy[1], arr[1])
  t.end()
})

test('clone objects containing arrays', t => {
  const obj = {
    foo: ['foo'],
    bar: [null]
  }
  const copy = clone(obj)
  t.deepEqual(copy, obj)
  t.notEqual(copy, obj)
  t.deepEqual(copy.foo, obj.foo)
  t.notEqual(copy.foo, obj.foo)
  t.deepEqual(copy.bar, obj.bar)
  t.notEqual(copy.bar, obj.bar)
  t.end()
})

test('clone arrays of objects', t => {
  const arr = [{ foo: 1 }, { bar: 2 }]
  const copy = clone(arr)
  t.deepEqual(copy, arr)
  t.notEqual(copy, arr)
  t.deepEqual(copy[0], arr[0])
  t.notEqual(copy[0], arr[0])
  t.deepEqual(copy[1], arr[1])
  t.notEqual(copy[1], arr[1])
  t.end()
})

test('clone with circular references', t => {
  const foo = { bar: 'bar' }
  foo.baz = [foo]
  const copy = clone(foo)
  // Cannot use tape's deep equal. It is not circular reference safe.
  t.doesNotThrow(() => assert.deepEqual(copy, foo))
  t.notEqual(copy.baz, foo.baz)
  t.doesNotThrow(() => assert.deepEqual(copy.baz, foo.baz))
  t.equal(copy.baz[0], copy)
  t.end()
})

test('clone Dates', t => {
  const foo = new Date()
  const copy = clone(foo)
  t.equal(copy.toString(), foo.toString())
  t.notEqual(copy, foo)
  t.end()
})

/**
 * Adapted from:
 *
 *   https://github.com/thebearingedge/deep-clone
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
 */
