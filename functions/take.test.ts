import { assertEquals } from "testing";
import { take } from "./take.ts";

Deno.test("take", () => {
  const [a, b, c, d, e] = ["a", "b", "c", "d", "e"];

  assertEquals(take(3)([a, b, c, d, e]), [a, b, c]);
  assertEquals(take(4)([a, b]), [a, b]);
});
