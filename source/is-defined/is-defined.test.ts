import { describe } from "../../lib/describe.ts";
import { isDefined } from "./is-defined.ts";

describe("source/is-defined", async ({ assert, inspect }) => {
  const data: [unknown, boolean][] = [
    [null, false],
    [undefined, false],
    [NaN, false],
    ["", true],
    [[], true],
    [false, true],
    [{}, true],
    [{ length: 0 }, true],
  ];

  const test = <A, B>([value, expected]: [A, B]) => {
    const actual = isDefined(value);
    const given = inspect`isDefined(${value})`;
    assert({ given, actual, expected });
  };

  data.forEach(test);
});
