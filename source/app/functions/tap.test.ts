import { describe } from "../../lib/describe.ts";
import { tap } from "./tap.ts";

describe("tap", async ({ assert, inspect }) => {
  const sideEffect = (x: number) => x * 2;
  const value = 4;
  const actual = tap(sideEffect)(value);
  const expected = value;
  const given = inspect`tap(${sideEffect})(${value})`;
  const should = inspect`return ${value}`;
  assert({ actual, expected, given, should });
});
