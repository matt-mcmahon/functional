import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { pipeV } from "./pipeV.ts";

Deno.test("pipeV", () => {
  const f = (x: number) => x + 1;
  const g = (x: number) => 2 * x;

  assertEquals(pipeV(3)(f, g), 8);
  assertEquals(pipeV(3)(f, g), 8);
  assertEquals(pipeV(3)(f, g) !== 7, true);
});
