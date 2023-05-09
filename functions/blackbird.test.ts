import { assertEquals } from "testing";
import { blackbird } from "./blackbird.ts";

Deno.test("blackbird", () => {
  // the converging function:
  const converge = (a: string, b: string, c: number) =>
    `("${a}", "${b}", ${c})`;

  const toUpper = (s: string) => s.toUpperCase();
  const toLower = (s: string) => s.toLowerCase();
  const toLength = (s: string) => s.length;

  const blackbird0 = blackbird;
  const blackbird1 = blackbird0(converge);
  const blackbird2 = blackbird1(toUpper, toLower, toLength);

  const value = "HeLlO";

  assertEquals(
    blackbird2(value),
    `("HELLO", "hello", 5)`,
    `should uppercase, lowercase, and get length of ${value}`,
  );
});
