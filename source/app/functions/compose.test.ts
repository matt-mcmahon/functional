import { compose } from "./compose.ts";
import { describe } from "../../lib/describe.ts";

describe("fluent compose", ({ assert, inspect }) => {
  const double = (x: number) => x * 2;
  const numToString = (x: number) => `${x}`;
  const toCharacterArray = (x: string) => x.split("");
  const joinWithDashes = (x: string[]) => x.join("-");

  const c1 = compose.fluent(joinWithDashes);
  const c2 = c1.from(toCharacterArray);
  const c3 = c2.from(numToString);
  const c4 = c3.from(double);
  {
    const value = ["1", "2", "3", "4", "5"];
    const actual = c1(value);
    const expected = "1-2-3-4-5";
    const given = inspect`c1(${value})`;
    assert({ actual, expected, given });
  }
  {
    const value = "12345";
    const actual = c2.call(value);
    const expected = "1-2-3-4-5";
    const given = inspect`c2(${value})`;
    assert({ actual, expected, given });
  }
  {
    const value = 12345;
    const given = inspect`c3(${value})`;
    const actual = c3(value);
    const expected = "1-2-3-4-5";
    assert({ actual, expected, given });
  }
  {
    const value = 12345;
    const actual = c4(value);
    const expected = "2-4-6-9-0";
    const given = inspect`c4(${value})`;
    assert({ actual, expected, given });
  }
});

describe("classic compose", ({ assert, inspect }) => {
  const double = (x: number) => x * 2;
  const numToString = (x: number) => `${x}`;
  const toCharacterArray = (x: string) => x.split("");
  const joinWithDashes = (x: string[]) => x.join("-");
  const value = 12345;

  const f = compose(joinWithDashes, toCharacterArray, numToString, double);
  const actual = f(value);
  const expected = "2-4-6-9-0";
  const given = inspect
    `compose(joinWithDashes, toCharacterArray, numToString, double)`;

  assert({ actual, expected, given });
});
