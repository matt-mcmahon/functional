import { assertEquals } from "testing";
import { log } from "./log.ts";

Deno.test("log", () => {
  assertEquals(log(`the value is...`)(4), 4);
});
