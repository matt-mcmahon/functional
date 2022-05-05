import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { head } from "./head.ts";

Deno.test("head", () => {
  const as = ["a", "b", "c"];
  assertEquals(head(as), "a");
  assertEquals(head([]), undefined);
});
