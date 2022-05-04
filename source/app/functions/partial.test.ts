import { assertEquals } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { partial } from "./partial.ts";

Deno.test("partial", () => {
  const [a, b, c, d] = ["a", "b", "c", "d"];

  const f = (a: string, b: string, c: string, d: string) => a + b + c + d;
  const f_AB = partial(a, b)(f);
  const f_ABC = partial(c)(f_AB);

  assertEquals(f.length, 4);
  assertEquals(f_AB(c, d), "abcd");
  assertEquals(f_ABC(d), "abcd");
});
