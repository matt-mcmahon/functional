import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { last } from "./last.ts";

Deno.test("last", () => {
  assertEquals(
    last(["a", "b", "c"]),
    "c",
  );

  assertEquals(
    last(["a", 1, "c"]),
    "c",
  );

  assertEquals(
    last([]),
    undefined,
  );
});
