import {
  assertEquals,
  fail,
} from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { either } from "./either.ts";
import { T } from "./T.ts";

Deno.test("either", () => {
  const max = 10;
  const gt10 = (x: number) => x > max;
  const even = (x: number) => x % 2 === 0;
  const f = either(gt10)(even);

  assertEquals(f(101), true, "value > max");
  assertEquals(f(8), true, "8 is even");
  assertEquals(f(7), false);

  try {
    const throws = () => {
      throw new Error("either should not execute me");
    };
    either(T)(throws)("anything");
  } catch {
    fail("did not short circuit");
  }
});
