import { describe } from "../../lib/describe";
import { isFunction } from "./isFunction";

describe("isFunction", async ({ assert, inspect }) => {
  const expected = true;
  const should = inspect`be a function`;
  {
    const actual = isFunction(function test() {
      "do nothing";
    });
    const given = inspect`normal function`;
    assert({ actual, expected, given, should });
  }

  {
    const actual = isFunction(function* test() {
      yield;
    });
    const given = inspect`generator function`;
    assert({ actual, expected, given, should });
  }

  {
    const actual = isFunction(async function test() {
      "do nothing";
    });
    const given = inspect`async function`;
    assert({ actual, expected, given, should });
  }

  {
    const actual = isFunction(() => {
      "do nothing";
    });
    const given = inspect`arrow function`;
    assert({ actual, expected, given, should });
  }

  {
    const expected = false;
    const actual = isFunction(null);
    const given = inspect`the value ${null}`;
    const should = inspect`not be a function`;
    assert({ actual, expected, given, should });
  }

  {
    const expected = false;
    const actual = isFunction("function");
    const given = inspect`the string ${"function"}`;
    const should = inspect`not be a function`;
    assert({ actual, expected, given, should });
  }
});
