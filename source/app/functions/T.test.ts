import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { T } from "./T.ts";

Deno.test("t", () => {
  assertEquals(
    T(),
    true,
  );

  assertEquals(
    T(false),
    true,
  );
});
