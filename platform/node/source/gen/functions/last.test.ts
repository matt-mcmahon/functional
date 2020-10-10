import { describe } from "../../lib/describe";
import { last } from "./last";

describe("last", async ({ assert, inspect }) => {
  {
    const value = ["a", "b", "c"];
    const expected = "c";
    const actual = last(value);
    const given = inspect`last(${value})`;
    assert({ given, actual, expected });
  }

  {
    const value = ["a", 1, "c"];
    const expected = "c";
    const actual = last(value);
    const given = inspect`mixed array ${value}`;
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
