import { describe } from "../../lib/describe.ts";
import { blackbird } from "./blackbird.ts";

describe("blackbird", async ({ assert, inspect }) => {
  // the converging function:
  const converge = (a: string, b: string, c: number) =>
    `("${a}", "${b}", ${c})`;

  {
    const actual = converge("HELLO", "hello", 5);
    const expected = `("HELLO", "hello", 5)`;
    const given = inspect`converge(${"HELLO"}, ${"hello"}, ${5})`;
    assert({ given, actual, expected });
  }

  const toUpper = (s: string) => s.toUpperCase();
  const toLower = (s: string) => s.toLowerCase();
  const toLength = (s: string) => s.length;

  const blackbird0 = blackbird;
  const blackbird1 = blackbird0(converge);
  const blackbird2 = blackbird1(toUpper, toLower, toLength);

  {
    const value = "HeLlO";
    const expected = `("HELLO", "hello", 5)`;
    const actual = blackbird2(value);
    const given = inspect`blackbird2(${value})`;
    assert({ given, actual, expected });
  }
});
