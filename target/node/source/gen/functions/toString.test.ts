import { describe } from "../../lib/describe";
import { toString } from "./toString";

describe("to-string", ({ assert, inspect }) => {
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
    [
      {
        value: "custom toString",
        toString() {
          return this.value;
        },
      } as { value: string },
      "custom toString",
    ],
  ];

  const test = <A, B>([value, expected]: [A, B]) => {
    const actual = toString(value);
    const given = inspect`toString(${value})`;
    assert({ given, actual, expected });
  };

  data.forEach(test);
});
