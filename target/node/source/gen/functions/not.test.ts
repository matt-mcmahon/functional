import { describe } from "../../lib/describe";
import { not } from "./not";

describe("not", ({ assert, inspect }) => {
  const values: [unknown, boolean][] = [
    [true, false],
    [false, true],
    // truthy values
    [{}, false],
    ["some string", false],
    [5, false],
    // falsy values
    [0, true],
    [-0, true],
    [+0, true],
    ["", true],
    [``, true],
    [null, true],
    [undefined, true],
    [NaN, true],
  ];

  values.forEach(([value, expected]: [unknown, boolean]) => {
    const actual = not(value);
    const given = inspect`not(${value})`;
    assert({ expected, actual, given });
  });
});
