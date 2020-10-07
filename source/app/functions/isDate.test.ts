import { describe } from "../../lib/describe.ts";
import { isDate } from "./isDate.ts";

describe("is-date", async ({ assert, inspect }) => {
  const data: [unknown, boolean][] = [
    [new Date(), true],
    [undefined, false],
    [NaN, false],
    ["", false],
    [[], false],
    [false, false],
    [{}, false],
    [{ length: 0 }, false],
  ];

  const test = <A, B>([value, expected]: [A, B]) => {
    const actual = isDate(value);
    const given = inspect`isDate(${value})`;
    assert({ given, actual, expected });
  };

  data.forEach(test);
});
