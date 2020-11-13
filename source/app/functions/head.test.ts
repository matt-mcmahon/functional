import { describe } from "../../lib/describe.ts";
import { head } from "./head.ts";

describe("head", async ({ assert, inspect }) => {
  const as = ["a", "b", "c"];

  {
    const given = inspect`head(${as})`;
    const actual = head(as);
    const expected = "a";
    assert({ given, actual, expected });
  }

  {
    const given = inspect`an empty list, ${[]}`;
    const actual = head([]);
    const expected = undefined;
    assert({ given, actual, expected });
  }
});
