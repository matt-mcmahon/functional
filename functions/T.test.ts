import { assertEquals } from "testing";
import { T } from "./T.ts";

Deno.test("T", () => {
  assertEquals(T(), true);
  assertEquals(T(false), true);
});
