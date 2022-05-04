import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { join } from "./join.ts";

Deno.test("join", () => {
  assertEquals(
    join("-")(["a", "b", "c"]),
    "a-b-c",
  );

  assertEquals(
    join(undefined)(["a", "b", "c"]),
    "a,b,c",
  );

  assertEquals(
    join("-")(["a"]),
    "a",
  );

  const list = [
    "a",
    {
      toString() {
        return "object!";
      },
    },
    "b",
    1,
    "c",
  ];
  assertEquals(
    join(", ")(list),
    "a, object!, b, 1, c",
  );
});
