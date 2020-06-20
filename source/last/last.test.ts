import { describe } from "../../lib/describe.ts";
import { last } from "./last.ts";

describe("source/last.ts", async ({ assert, inspect }) => {
  {
    const value = ["a", "b", "c"];
    const expected = "c";
    const actual = last(value);
    const given = inspect`last(${value})`;
    assert({ given, actual, expected });
  }

  {
    const value: string[] = [];
    const expected = undefined;
    const actual = last(value);
    const given = inspect`last(${value})`;
    assert({ given, actual, expected });
  }
});
