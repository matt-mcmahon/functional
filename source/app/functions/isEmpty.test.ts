import { describe } from "../../lib/describe.ts";
import { isEmpty } from "./isEmpty.ts";

describe("is-empty", async ({ assert, inspect }) => {
  const data: [unknown, boolean][] = [
    [null, false],
    [undefined, false],
    ["", true],
    [[], true],
    [{}, true],
    [NaN, false],
    [false, false],
    [{ length: 0 }, false],
  ];

  const test = ([value, expected]: [unknown, boolean]) => {
    const actual = isEmpty(value);
    const given = inspect`isEmpty(${value})`;
    assert({ given, actual, expected });
  };

  data.forEach(test);
});
