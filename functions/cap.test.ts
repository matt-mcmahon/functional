import { cap } from "./cap.ts";

import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";

Deno.test("cap", () => {
  assertEquals(cap("uncapped"), "Uncapped");
  assertEquals(cap(""), "");
});
