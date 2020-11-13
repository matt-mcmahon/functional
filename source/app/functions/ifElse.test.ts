import { ifElse } from "./ifElse.ts";
import { describe } from "../../lib/describe.ts";

describe("if-else", ({ assert, inspect }) => {
  {
    const ifEven = (x: number) => x % 2 === 0;
    const whenEven = (x: number) => `${x} is even`;
    const whenOdd = (x: number) => `${x} is odd`;
    const fn = ifElse(ifEven, whenEven, whenOdd);

    {
      const given = inspect`f(${4})`;
      const actual = fn(4);
      const expected = "4 is even";
      const should = "should run true branch";
      assert({ actual, expected, given, should });
    }

    {
      const given = inspect`f(${3})`;
      const actual = fn(3);
      const expected = `3 is odd`;
      const should = `run false branch`;
      assert({ actual, expected, given, should });
    }
  }

  {
    const isNumber = (n: unknown) => typeof n === "number";
    const whenTrue = (n: number) => n * 2;
    const whenFalse = (n: unknown) => `I'm a ${typeof n}`;
    const f = ifElse(isNumber, whenTrue, whenFalse);
    {
      const given = inspect`f(${2})`;
      const should = `run true branch`;
      const expected = 4;
      const actual = f(2);
      assert({ given, should, actual, expected });
    }

    {
      const given = inspect`f(${"foo"})`;
      const should = `run false branch`;
      const expected = "I'm a string";
      const actual = f("foo");
      assert({ given, should, actual, expected });
    }

    {
      const expected = "I'm a object";
      const actual = f({ bar: "3" });
      const given = inspect`f({ bar: "3" })`;
      const should = `run false branch`;
      assert({ given, should, actual, expected });
    }
  }
});
