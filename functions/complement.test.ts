import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { complement } from "./complement.ts";

Deno.test("complement", () => {
  const something = (v: unknown) => !!v;
  const T = () => true;

  assertEquals(complement(something)(false), true);
  assertEquals(complement(something)("truthy"), false);
  assertEquals(complement(T)(false), false);
});
