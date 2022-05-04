import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { reverse } from "./reverse.ts";

Deno.test("reverse", () => {
  assertEquals(
    reverse([1, 2, 3, 4]),
    [4, 3, 2, 1],
  );

  const original = [1, 2, 3, 4];
  reverse(original);
  assertEquals(
    original,
    [1, 2, 3, 4],
  );
});
