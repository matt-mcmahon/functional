import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { sort } from "./sort.ts";

Deno.test("sort", () => {
  const as = [3, 5, 9, 22, 1, 0];
  const bs = [0, 1, 3, 5, 9, 22];
  const fun = sort((a: number, b: number) => a - b);

  assertEquals(
    fun(as),
    bs,
  );

  assertEquals(
    fun([]),
    [],
  );
});
