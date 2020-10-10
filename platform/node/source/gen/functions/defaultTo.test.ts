import { describe } from "../../lib/describe";
import { defaultTo } from "./defaultTo";

describe("defaultTo", async ({ assert, inspect }) => {
  const defaultValue = "replaced";
  const f = defaultTo(defaultValue);
  {
    const value = false;
    const given = inspect`defaultTo(${defaultValue})(${value})`;
    const expected = false;
    const actual = f(value);
    assert({ given, actual, expected });
  }

  {
    const value = 0;
    const expected = 0;
    const actual = f(value);
    const given = inspect`defaultTo(${defaultValue})(${value})`;
    assert({ given, actual, expected });
  }

  {
    const value = null;
    const expected = defaultValue;
    const actual = f(value);
    const given = inspect`defaultTo(${defaultValue})(${value})`;
    assert({ given, actual, expected });
  }

  {
    const value = undefined;
    const expected = defaultValue;
    const actual = f(value);
    const given = inspect`defaultTo(${defaultValue})(${value})`;
    assert({ given, actual, expected });
  }

  {
    const defaultValue = 1;
    const value = NaN;
    const expected = defaultValue;
    const actual = defaultTo(defaultValue)(value);
    const given = inspect`defaultTo(${defaultValue})(${value})`;
    assert({ given, actual, expected });
  }
});
