import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { log } from "./log.ts";

Deno.test("log", () => {
  assertEquals(log(`the value is...`)(4), 4);
});
