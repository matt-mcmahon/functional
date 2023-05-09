import { assertEquals } from "testing";
import { merge } from "./merge.ts";

Deno.test("merge", () => {
  const first = { a: 1, b: 1 };
  const second = { b: 2 };

  assertEquals(
    merge(first)(second),
    { a: 1, b: 2 },
  );
});
