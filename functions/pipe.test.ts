import { pipe } from "./pipe.ts";
import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";

Deno.test("classic pipe", () => {
  const double = (x: number) => x * 2;
  const numToString = (x: number) => `${x}`;
  const toCharacterArray = (x: string) => x.split("");
  const joinWithDashes = (x: string[]) => x.join("-");
  const f = pipe(double, numToString, toCharacterArray, joinWithDashes);

  assertEquals(f(12345), "2-4-6-9-0");
});
