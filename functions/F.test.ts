import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { F } from "./F.ts";

Deno.test("F", () => {
  assertEquals(F(), false);
  assertEquals(F(true), false);
  assertEquals(F("foo", "bar"), false);
});
