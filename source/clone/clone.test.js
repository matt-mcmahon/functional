import { strict } from "assert";
import { describe } from "@mwm/describe";
import { clone, implementation, signatures } from "./clone.js";

describe(
  {
    path: "source/clone",
    public: [clone],
    private: [signatures, implementation],
  },
  async ({ assert, inspect }) => {
    {
      const original = { foo: "foo", bar: "bar" };
      const cloned = clone(original);

      {
        const given = inspect`a flat-object`;
        const should = inspect`be a new object instance`;
        const actual = cloned !== original;
        assert({ given, should, actual });
      }

      {
        const given = `a cloned object`;
        const should = `have the same properties and values as the original`;
        const actual = cloned;
        const expected = original;
        assert({ given, should, actual, expected });
      }
    }

    {
      const original = {
        foo: "foo",
        bar: {
          baz: "baz",
        },
      };
      const cloned = clone(original);
      const given = inspect`a nested object`;

      {
        const should = inspect`have equivalent nested properties`;
        const actual = cloned;
        const expected = original;
        assert({ given, should, actual, expected });
      }

      {
        const should = inspect`be a new instance`;
        const actual = cloned.bar !== original.bar;
        assert({ given, should, actual });
      }
    }

    {
      const given = inspect`a flat array`;
      const expected = ["foo", "bar", "bax"];
      const actual = clone(expected);
      assert({ given, actual, expected });
      assert({
        given,
        should: `be a new array instance`,
        actual: actual !== expected,
      });
    }

    {
      const expected = [
        ["foo", { bar: "bar" }],
        ["baz", "qux"],
      ];
      const actual = clone(expected);
      const given = inspect`a nested, mixed array`;

      assert({
        given,
        actual,
        expected,
      });

      assert({
        given,
        should: inspect`make new instances (0)`,
        actual: actual[0] !== expected[0],
      });

      assert({
        given,
        should: inspect`make new instances (0,1)`,
        actual: actual[0][1] !== expected[0][1],
      });

      assert({
        given,
        should: inspect`make new instances (1)`,
        actual: actual[1] !== expected[1],
      });
    }

    {
      const expected = {
        foo: ["foo", { baz: "baz" }],
        bar: [null],
      };
      const actual = clone(expected);
      const given = `a nested, mixed object`;

      assert({ given, actual, expected });

      assert({
        given,
        should: inspect`create new ${"foo"} array instances`,
        actual: actual.foo !== expected.foo,
      });

      assert({
        actual,
        should: inspect`create new ${"bar"} array instances`,
        actual: actual.bar !== expected.bar,
      });

      assert({
        given,
        should: inspect`create new ${{ baz: "baz" }} objects`,
        actual: actual.foo[1] !== expected.foo[1],
      });

      assert({
        given,
        should: inspect`copy ${null} values`,
        actual: actual.bar[0],
        expected: null,
      });
    }

    {
      // test('clone with circular references', assert => {
      const expected = { bar: "bar" };
      expected.bazInArray = [expected];
      expected.bazAsProperty = expected;
      const actual = clone(expected);

      assert.doesNotThrow(() => {
        // Cannot use tape's deep equal. It is not circular reference safe.
        strict.deepEqual(actual, expected);
      }, `should clone circular references`);

      const given = inspect`circular references`;
      assert({
        given,
        should: inspect`clone not copy bazInArray`,
        actual: actual.bazInArray !== expected.bazInArray,
      });

      assert({
        given,
        should: inspect`clone not copy bazAsProperty`,
        actual: actual.bazAsProperty !== expected.bazAsProperty,
      });

      assert({
        given: inspect`clone's bazInArray[0]`,
        should: inspect`be a new object`,
        actual: actual.bazInArray[0] !== expected.bazInArray[0],
      });

      assert({
        given: inspect`clone's bazInArray[0]`,
        should: inspect`should refrence the clone`,
        actual: actual.bazInArray[0] === actual,
      });

      assert({
        given: inspect`clone's bazAsProperty`,
        should: inspect`should refrence the clone`,
        actual: actual.bazAsProperty === actual,
      });
    }

    {
      const expected = new Date();
      const actual = clone(expected);
      const given = inspect`a cloned date, ${expected}`;

      assert({
        given,
        should: inspect`be equivalent`,
        actual: actual.toString(),
        expected: expected.toString(),
      });

      assert({
        given,
        should: inspect`a new instance`,
        actual: expected !== actual,
      });
    }

    {
      const f = () => true;
      f.baz = "baz";
      const g = clone(f, null);
      const given = inspect`a clone of function ${f}`;

      assert.doesNotThrow(g, `given ${given}; should be invokable`);

      {
        const should = inspect`have the property, ${{ baz: "baz" }}`;
        const actual = g.baz;
        const expected = f.baz;
        assert({ given, should, actual, expected });
      }
    }
  },
);

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
