import { assertEquals } from "testing";
import { F } from "./F.ts";

Deno.test("F", () => {
  assertEquals(F(), false);
  assertEquals(F(true), false);
  assertEquals(F("foo", "bar"), false);
});
