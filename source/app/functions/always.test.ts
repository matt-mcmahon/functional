import { always } from "./always.ts";
import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";

Deno.test("always", () => {
  assertEquals(always("bar")("foo"), "bar");
});
