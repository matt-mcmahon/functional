import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { filter } from "./filter.ts";

Deno.test("filter", () => {
  const predicate = (n: number) => n % 2 === 0;
  const evens = filter(predicate);

  assertEquals(
    evens([1, 2, 3, 4, 5, 6]),
    [2, 4, 6],
  );

  assertEquals(
    evens([]),
    [],
  );

  assertEquals(
    evens([1, 3, 5]),
    [],
  );

  assertEquals(
    evens([4, 2, 6]),
    [4, 2, 6],
  );
});
