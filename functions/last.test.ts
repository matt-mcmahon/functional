import { assertEquals } from "testing";
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
