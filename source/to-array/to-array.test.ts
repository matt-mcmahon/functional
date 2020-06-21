import { describe } from "../../lib/describe.ts";
import { toArray } from "./to-array.ts";

describe("source/to-string", async ({ assert, inspect }) => {
  const values: [ArrayLike<string> | Iterable<string>, Array<string>][] = [
    [["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"]],
    ["abcde", ["a", "b", "c", "d", "e"]],
    [new Set(["a", "b", "c", "d", "e"]), ["a", "b", "c", "d", "e"]],
  ];

  const test = (
    [value, expected]: [ArrayLike<string> | Iterable<string>, Array<string>],
  ) => {
    assert({
      given: inspect`toArray(${value})`,
      actual: toArray(value),
      expected,
    });
  };

  values.forEach(test);
});
