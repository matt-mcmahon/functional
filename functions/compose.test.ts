import { assertEquals } from "testing";
import { compose } from "./compose.ts";

Deno.test("classic compose", () => {
  const double = (x: number) => x * 2;
  const numToString = (x: number) => `${x}`;
  const toCharacterArray = (x: string) => x.split("");
  const joinWithDashes = (x: string[]) => x.join("-");
  const value = 12345;

  const f = compose(joinWithDashes, toCharacterArray, numToString, double);
  assertEquals(f(value), "2-4-6-9-0");
});
