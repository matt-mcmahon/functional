import { has } from "./has.ts";
import { describe } from "../../lib/describe.ts";

describe("own.ts", ({ assert, inspect }) => {
  const ownFoo = has("foo");

  {
    const actual = typeof ownFoo;
    const expected = "function";
    const message = `typeof ownFoo is "${expected}"`;
    assert({ actual, expected, message });
  }

  {
    const actual = ownFoo({ foo: "foo" });
    const expected = true;
    const message = `{ foo: "foo"} should own "foo"`;
    assert({ actual, expected, message });
  }

  {
    const actual = has("bar")({ foo: "foo" });
    const expected = false;
    const message = `{ foo: "foo"} should NOT own "bar"`;
    assert({ actual, expected, message });
  }

  {
    const actual = has("toString")({ foo: "foo" });
    const expected = false;
    const message = `{ foo: "foo"} should NOT own "toString"`;
    assert({ actual, expected, message });
  }

  {
    const actual = has("foo")(7);
    const expected = false;
    const given = inspect`primitive value ${7}`;
    assert({ actual, expected, given });
  }

  {
    const a = { a: "a" };
    const b = { b: "b" };
    const hasA = has("a");
    const hasB = has("b");

    {
      const actual = hasA(a);
      const given = inspect`${a}`;
      const should = inspect`have own property ${"a"}`;
      const expected = true;
      assert({ actual, expected, given, should });
    }

    {
      const given = inspect`${b}`;
      const should = inspect`have own property ${"b"}`;
      const actual = hasB(b);
      const expected = true;
      assert({ given, expected, should, actual });
    }

    const iOfB = Object.create(b);
    iOfB.a = "a";
    const eg = {
      a: "a",
      prototype: {
        b: "b",
      },
    };

    {
      const given = inspect`instance of ${eg}`;
      const should = inspect`have own property ${"a"}`;
      const actual = hasA(iOfB);
      const expected = true;
      assert({ given, expected, should, actual });
    }

    {
      const given = inspect`instance of ${eg}`;
      const should = inspect`not have own property ${"b"}`;
      const actual = hasB(iOfB);
      const expected = false;
      assert({ given, expected, should, actual });
    }
  }
});
