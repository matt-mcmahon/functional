import { prop } from "./prop.ts";
import { describe } from "../../lib/describe.ts";

describe(`prop.ts`, async ({ assert, inspect }) => {
  {
    const expected = 1;
    const value = { a: expected };
    const actual = prop("a")(value);
    const given = inspect`get(${"a"})(${value})`;
    assert({ actual, expected, given });
  }
  {
    const value = { a: "a" };
    const actual = prop("b")(value);
    const expected = undefined;
    const given = inspect`get(${"b"})(${value})`;
    assert({ actual, expected, given });
  }
  {
    const expected = "foo";
    const actual = prop("foo")({ foo: "foo" });
    const given = inspect`property foo`;
    const should = inspect`${expected}`;
    assert({ actual, expected, given, should });
  }

  {
    const expected = undefined;
    const actual = prop("foo")({ bar: "bar" });
    const given = inspect`nonexistant property value`;
    const should = inspect`${expected}`;
    assert({ actual, expected, given, should });
  }
  {
    // Restricted by TS:
    // get("toString")(null)
    // get("toString")(undefined)
    // get("toString")(7)
    // get("toString")("7")
  }
});
