import { assertEquals } from "testing";
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
