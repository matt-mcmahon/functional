import { mapV } from "./mapV.ts";
import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";

Deno.test("map", () => {
  assertEquals(
    mapV((a: string) => parseInt(a, 10))(...["1", "2", "3"]),
    [1, 2, 3],
  );
});
