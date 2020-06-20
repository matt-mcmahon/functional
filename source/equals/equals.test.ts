import { describe } from "../../lib/describe.ts";
import { equals } from "./equals.ts";

describe("source/equals.ts", async ({ assert, inspect }) => {
  const values: [unknown, unknown, boolean][] = [
    ["a", "b", false],
    ["a", "a", true],
    [1, 1, true],
    [1, 2, false],
    [1, BigInt ? BigInt(1) : 3, false],
    [NaN, NaN, false],
    [undefined, undefined, true],
    [undefined, null, false],
    [null, null, true],
  ];

  values.forEach(([a, b, expected]) => {
    const actual = equals(a)(b);
    const given = inspect`equals(${a}, ${b})`;
    assert({ expected, actual, given });
  });
});
