import { describe } from "../../lib/describe.ts";
import { blackbird } from "./blackbird.ts";

describe("source/blackbird", async ({ assert, inspect }) => {
  const blackbird0 = blackbird;

  // the converging function:
  const inspectArguments = (...as: unknown[]) => {
    const ss = as.map((a) => inspect`${a}`);
    const s = ss.join(", ");
    return `(${s})`;
  };

  {
    const actual = inspectArguments("HELLO", "hello", 5);
    const expected = `("HELLO", "hello", 5)`;
    const given = inspect`converging function`;
    assert({ given, actual, expected });
  }

  const blackbird1 = blackbird0(inspectArguments);

  const toUpper = (s: string) => s.toUpperCase();
  const toLower = (s: string) => s.toLowerCase();
  const toLength = (s: string) => s.length;
  const blackbird2 = blackbird1(toUpper, toLower, toLength);

  {
    const value = "HeLlO";
    const expected = `("HELLO", "hello", 5)`;
    const actual = blackbird2(value);
    const given = inspect`blackbird2(${value})`;
    assert({ given, actual, expected });
  }
});
