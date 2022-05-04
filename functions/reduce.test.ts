import { reduce, reduceV } from "./reduce.ts";

import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";

Deno.test("reduce", () => {
  const as = ["1", "2", "3"];
  const b = 7;
  const bab = (b: number, a: string) => b + parseInt(a, 10);

  assertEquals(
    reduce(bab)(1)(as),
    b,
  );

  assertEquals(
    reduceV(bab)(1)(...as),
    b,
  );
});
