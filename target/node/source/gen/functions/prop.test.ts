import { prop } from "./prop";
import { describe } from "../../lib/describe";

describe("prop, explicit", async ({ assert, inspect }) => {
  const getA = prop("a");

  {
    const value = { a: "A" };
    const actual = getA(value);
    const expected = "A";
    assert({ actual, expected, value });
  }

  {
    const value = { a: "A", b: "B" };
    const actual = getA(value);
    const expected = "A";
    assert({ actual, expected, value });
  }

  {
    const value = { b: "B" };
    //@ts-ignore INTENTIONAL ERROR
    const actual = getA(value);
    const expected = undefined;
    const given = inspect`a ${value} without ${{ a: "A" }}`;
    const should = inspect`not compile unless @ts-ignore`;
    assert({ actual, expected, value, given, should });
  }
});

describe("prop, inferred", async ({ assert, inspect }) => {
  {
    const expected = 1;
    const value = { a: expected };
    const actual = prop("a")(value);
    const given = inspect`get(${"a"})(${value})`;
    assert({ actual, expected, given });
  }

  {
    const expected = "foo";
    const actual = prop("foo")({ foo: "foo" });
    const given = inspect`property foo`;
    const should = inspect`${expected}`;
    assert({ actual, expected, given, should });
  }

  // Restricted by Type System:
  // prop("toString")(null);
  // prop("toString")(undefined);

  {
    const value = 7;
    const expected = "function";
    const actual = typeof prop("toString")(value);
    const given = inspect`primitive value ${value}`;
    const should = inspect`find prototype method \`toString\``;
    assert({ actual, expected, given, should });
  }

  {
    const value = "7";
    const expected = "function";
    const actual = typeof prop("toString")(value);
    const given = inspect`primitive value ${value}`;
    const should = inspect`find prototype method \`toString\``;
    assert({ actual, expected, given, should });
  }

  {
    const value = { is: 7 };
    const expected = "function";
    const actual = typeof prop("toString")(value);
    const given = inspect`primitive value ${value}`;
    const should = inspect`find prototype method \`toString\``;
    assert({ actual, expected, given, should });
  }
});

describe("prop, missing propertyKey", async ({ assert, inspect }) => {
  {
    const value = { a: "a" };
    //@ts-ignore INTENTIONAL ERROR
    const actual = prop("b")(value);
    const expected = undefined;
    const given = inspect`get(${"b"})(${value})`;
    assert({ actual, expected, given });
  }

  {
    const expected = undefined;
    //@ts-ignore INTENTIONAL ERROR
    const actual = prop("foo")({ bar: "bar" });
    const given = inspect`nonexistant property value`;
    const should = inspect`${expected}`;
    assert({ actual, expected, given, should });
  }
});
