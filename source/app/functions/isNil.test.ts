import { describe } from "../../lib/remote/describe.ts";
import { isNil } from "./isNil.ts";

describe("isNil", async ({ assert, inspect }) => {
  const data: [unknown, boolean][] = [
    [null, true],
    [undefined, true],
    [NaN, false],
    [0, false],
    [[], false],
    ["", false],
    [false, false],
    [true, false],
    ["truthy", false],
  ];

  data.forEach(([value, expected]) =>
    assert({
      actual: isNil(value),
      expected,
      given: inspect`isNil(${value})`,
    })
  );
});
