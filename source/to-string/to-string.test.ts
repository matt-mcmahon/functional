import { describe } from "../../lib/describe.ts";
import { toString } from "./to-string.ts";

describe("source/to-string", async ({ assert, inspect }) => {
  const data: [unknown, string][] = [
    [1, "1"],
    [0, "0"],
    [NaN, "NaN"],
    [-Infinity, "-Infinity"],
    [+Infinity, "Infinity"],
    [undefined, "undefined"],
    ["", ""],
    [[], ""],
    [[1, 2, 3], "1,2,3"],
    [false, "false"],
    [{}, "[object Object]"],
    [{
      length: 0,
      toString() {
        return "zeroLength";
      },
    }, "zeroLength"],
  ];

  const test = <A, B>([value, expected]: [A, B]) => {
    const actual = toString(value);
    const given = inspect`toString(${value})`;
    assert({ given, actual, expected });
  };

  data.forEach(test);
});
