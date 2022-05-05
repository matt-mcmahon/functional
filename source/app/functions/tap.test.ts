import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { tap } from "./tap.ts";

Deno.test("tap", () => {
  assertEquals(
    tap((x: number) => x * 2)(4),
    4,
  );
});
