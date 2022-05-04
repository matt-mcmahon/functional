import { map } from "./map.ts";
import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";

Deno.test("map", () => {
  const as = ["1", "2", "3"];
  const bs = [1, 2, 3];
  const ab = (a: string) => parseInt(a, 10);

  assertEquals(
    map(ab)(as),
    bs,
  );
});
