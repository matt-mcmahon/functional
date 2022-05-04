import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { merge } from "./merge.ts";

Deno.test("merge", () => {
  const first = { a: 1, b: 1 };
  const second = { b: 2 };

  assertEquals(
    merge(first)(second),
    { a: 1, b: 2 },
  );
});
