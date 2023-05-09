import { assertEquals } from "testing";
import { complement } from "./complement.ts";

Deno.test("complement", () => {
  const something = (v: unknown) => !!v;
  const T = () => true;

  assertEquals(complement(something)(false), true);
  assertEquals(complement(something)("truthy"), false);
  assertEquals(complement(T)(false), false);
});
