import { assertEquals } from "testing";
import { cap } from "./cap.ts";

Deno.test("cap", () => {
  assertEquals(cap("uncapped"), "Uncapped");
  assertEquals(cap(""), "");
});
