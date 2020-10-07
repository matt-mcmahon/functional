import { describe } from "../../lib/describe.ts";
import { bind } from "./bind.ts";

describe("bind", ({ assert, inspect }) => {
  type Foo = {
    method(foo?: string): string;
    foo?: string;
  };

  const methodSource: Foo = {
    foo: "original",
    method(value: string) {
      this.foo = value;
      return `method called`;
    },
  };

  const bind1 = bind(methodSource.method);

  {
    const actual = typeof bind1;
    const expected = "function";
    const given = inspect`${bind1}`;
    const should = inspect`be a ${expected} (1 applied arguments)`;
    assert({ given, should, actual, expected });
  }

  const bindTarget = {
    bar: "bar",
  };

  const bind2 = bind1(bindTarget);

  {
    const actual = typeof bind2;
    const expected = "function";
    const given = inspect`${bind2}`;
    const should = inspect`be a ${expected} (2 applied arguments)`;
    assert({ given, should, actual, expected });
  }

  const bind3 = bind2("foo");

  {
    const actual = bind3;
    const expected = "method called";
    const given = inspect`three applied arguments`;
    assert({ given, actual, expected });
  }

  {
    const given = inspect`the methodSource object`;
    const should = inspect`have ${{
      foo: "original",
    }}`;
    const { foo: actual } = methodSource;
    const expected = "original";
    assert({ given, should, actual, expected });
  }

  {
    const actual = { misdirection: bind2 };
    const expected = {
      misdirection: bind2,
    };
    const given = inspect`${actual.misdirection("BAZ")} on misdirection`;
    const should = inspect`not have ${{ foo: "BAZ" }}`;
    assert({ given, should, actual, expected });
  }

  {
    const arrow = (a: string) => a;

    const bound = bind(arrow);

    assert({
      actual: typeof bound,
      expected: "function",
      given: inspect`an arrow function`,
      should: inspect`fail, but that's not desirable`,
    });

    assert({
      actual: bound({ foo: "arrow bound" })("arrow argument"),
      expected: "arrow argument",
      given: inspect`bound arrow function`,
      should: inspect`be callable`,
    });
  }
});
