import { describe } from "../../lib/describe.ts";
import { take } from "./take.ts";

describe("take", async ({ assert, inspect }) => {
  const [a, b, c, d, e] = ["a", "b", "c", "d", "e"];
  {
    const as = [a, b, c, d, e];
    const actual = take(3)(as);
    const expected = [a, b, c];
    const given = inspect`take(${3}, ${as})`;
    assert({ given, actual, expected });
  }

  {
    const as = [a, b];
    const actual = take(4)(as);
    const expected = [a, b];
    const given = inspect`take(${4})(${as})`;
    assert({ given, actual, expected });
  }
});
